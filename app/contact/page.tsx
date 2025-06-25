"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { OutlineArrowRight } from "@/icons/Icons";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactMethods = [
    {
      title: "Email",
      value: "contact@rabbittale.co",
      description: "Best for business inquiries",
      href: "mailto:contact@rabbittale.co"
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
    <div className="flex-1 flex flex-col space-y-8">
      {/* Header */}
      <section id="contact-header">
        <div className="border-l-4 border-black dark:border-white pl-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            Get in Touch
          </h1>
        </div>
        <p className="px-6 mt-4 text-gray-600 dark:text-gray-400">
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

          <form onSubmit={handleSubmit} className="space-y-4 pl-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-0 focus:ring-0 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-0 focus:ring-0 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-0 focus:ring-0 focus:outline-none resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-bold uppercase tracking-wider"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Other Ways */}
        <section>
          <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Other Ways to Reach Me
            </h2>
          </div>

          <div className="space-y-px bg-gray-200 dark:bg-gray-800">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-900 p-6 transition-colors"
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
            <div className="bg-white dark:bg-gray-950 px-6 pb-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Currently available for new projects and collaborations. I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
