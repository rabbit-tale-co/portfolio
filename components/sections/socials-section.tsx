import Link from "next/link";
import { OutlineArrowRight } from "@/icons/Icons";

const socialLinks = [
  { platform: "GitHub", handle: "hasiradoo", href: "https://github.com/hasiradoo", icon: "GH" },
  { platform: "Twitter", handle: "@hasiradoo", href: "https://twitter.com/hasiradoo", icon: "TW" },
  { platform: "Discord", handle: "hasiradoo", href: "https://discord.com/users/569975072417251378", icon: "DC" },
  { platform: "Patreon", handle: "rabbittale", href: "https://patreon.com/rabbittale", icon: "PA" },
  { platform: "Bsky", handle: "@hasiradoo.rabbittale.co", href: "https://bsky.app/profile/hasiradoo.rabbittale.co", icon: "BS" }
];

export default function ConnectSection() {
  return (
    <section id="connect">
      <div className="space-y-3">
        <div className="border-l-4 border-black dark:border-white pl-4">
          <h2 className="text-lg font-mono font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px pt-px bg-foreground/[0.02]">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group bg-background p-6 hover:bg-foreground/[0.02] transition-colors ${index === socialLinks.length - 1 && socialLinks.length % 2 !== 0
                && "sm:col-span-2"
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="size-8 bg-foreground text-background flex items-center justify-center font-mono text-xs font-bold">
                      {social.icon}
                    </div>
                    <div className="font-mono text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                      {social.platform}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                    {social.handle}
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <OutlineArrowRight
                    size={16}
                    className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
