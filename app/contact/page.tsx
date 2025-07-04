"use client";

import { Badge } from "@/components/ui/badge";
import { OutlineArrowRight } from "@/icons/Icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod/v4";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: ContactFormValues) => {
    const sendMessage = async () => {
      // Get reCAPTCHA token
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: 'contact_form' }
      );

      // Send form data with token
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, recaptchaToken: token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      form.reset();
      return values;
    };

    toast.promise(sendMessage(), {
      loading: 'Sending your message...',
      success: `Message sent successfully! Thank you ${values.name}, I'll get back to you soon.`,
      error: 'Failed to send message. Please try again or use another contact method.',
      duration: 5000,
    });
  };

  const contactMethods = [
    {
      title: "Email",
      value: "kris@rabbittale.co",
      description: "Best for business inquiries",
      href: "mailto:kris@rabbittale.co"
    },
    {
      title: "Discord",
      value: "hasiradoo",
      description: "Quick chats and questions",
      href: "https://discord.com/users/569975072417251378"
    },
    {
      title: "Twitter",
      value: "@hasiradoo",
      description: "Follow my journey",
      href: "https://twitter.com/hasiradoo"
    },
    {
      title: "Bsky",
      value: "@hasiradoo.rabbittale.co‬",
      description: "Follow my journey",
      href: "https://bsky.app/profile/hasiradoo.rabbittale.co"
    }
  ];

  return (
    <>
      {/* Header */}
      <section id="contact-header" className="mb-12 max-w-screen-xl mx-auto px-0">
        <div className="border-l-4 border-foreground pl-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Let&apos;s discuss your project or just say hello
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 mb-6 max-w-screen-xl mx-auto px-0 space-y-6">
        {/* Contact Form */}
        <section>
          <div className="border-l-4 border-black dark:border-white pl-4 mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Send a Message
            </h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Your name"
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 text-sm border rounded-none focus:ring-2 focus:ring-foreground/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 text-sm border rounded-none focus:ring-2 focus:ring-foreground/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Tell me about your project..."
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 text-sm border rounded-none focus:ring-2 focus:ring-foreground/20 min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                size={"xl"}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </form>
          </Form>
        </section>

        {/* Other Ways */}
        <section>
          <div className="border-l-4 border-black dark:border-white pl-4 mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Other Ways to Reach Me
            </h2>
          </div>

          <div className="space-y-3 max-sm:px-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-background hover:bg-foreground/[0.02] p-4 sm:p-6 transition-colors border border-border"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                        {method.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">{method.value}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {method.description}
                    </p>
                  </div>
                  <OutlineArrowRight
                    size={16}
                    className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-200"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Availability */}
          <div className="mt-6">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Availability
              </h2>
            </div>
            <div className="bg-background px-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Currently available for new projects and collaborations. I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
