"use client";

import { Badge } from "@/components/ui/badge";
import { OutlineArrowRight } from "@/icons/Icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
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
    try {
      // Here you would typically send the data to your backend
      console.log("Form values:", values);
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      form.reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
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
      href: "https://discord.com/users/hasiradoo"
    },
    {
      title: "Twitter",
      value: "@hasiradoo",
      description: "Follow my journey",
      href: "https://twitter.com/hasiradoo"
    }
  ];

  return (
    <>
      {/* Header */}
      <section id="contact-header">
        <div className="border-l-4 border-foreground pl-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            Get in Touch
          </h1>
        </div>
        <p className="px-6 mt-4 text-gray-600 dark:text-gray-400 mb-6">
          Let&apos;s discuss your project or just say hello
        </p>
      </section>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <section>
          <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Send a Message
            </h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pl-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Your name"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Tell me about your project..."
                        disabled={isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors text-sm font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Form>
        </section>

        {/* Other Ways */}
        <section>
          <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Other Ways to Reach Me
            </h2>
          </div>

          <div className="space-y-px bg-foreground/[0.02]">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-background hover:bg-foreground/[0.02] p-6 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
                        {method.title}
                      </h3>
                      <Badge variant="secondary">{method.value}</Badge>
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
          <div className="mt-8">
            <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                Availability
              </h2>
            </div>
            <div className="bg-background px-6 pb-6">
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
