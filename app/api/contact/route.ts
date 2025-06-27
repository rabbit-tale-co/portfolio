import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod/v4';
import { verifyRecaptchaToken } from '@/lib/recaptcha';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(10),
  recaptchaToken: z.string()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, recaptchaToken } = contactFormSchema.parse(body);

    // Verify reCAPTCHA token
    const isValidToken = await verifyRecaptchaToken(recaptchaToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: 'Invalid reCAPTCHA token' },
        { status: 400 }
      );
    }

    // Send email
    await resend.emails.send({
      from: 'Portfolio Contact Form <kris@rabbittale.co>',
      to: 'kris@rabbittale.co',
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 5px;
                margin-bottom: 20px;
              }
              .content {
                background: white;
                padding: 20px;
                border: 1px solid #eee;
                border-radius: 5px;
              }
              .message {
                white-space: pre-wrap;
                background: #f8f9fa;
                padding: 15px;
                border-radius: 5px;
                margin-top: 10px;
              }
              .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #666;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h2 style="margin: 0; color: #2563eb;">New Message from Contact Form</h2>
            </div>
            <div class="content">
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <div class="message">
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from the portfolio contact form.</p>
            </div>
          </body>
        </html>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
