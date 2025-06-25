import { OutlineArrowRight } from "@/icons/Icons";

const honors = [
  {
    title: "None Yet",
    type: "Type",
    date: "01.2025",
    organization: "Organization",
    icon: "🏆"
  },
  // {
  //   title: "Outstanding Digital Innovation Award 2024",
  //   type: "Gold Medal",
  //   date: "12.2024",
  //   organization: "Tech Innovation Summit",
  //   icon: "🏆"
  // }
];

export default function HonorsAwardsSection() {
  return (
    <section id="honors">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="border-l-4 border-black dark:border-white pl-4">
            <h2 className="text-lg font-mono font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              Honors & Awards
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                ({honors.length})
              </span>
            </h2>
          </div>
        </div>

        <div className="space-y-px bg-gray-200 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800">
          {honors.map((honor, index) => (
            <div key={index} className="group bg-white dark:bg-gray-950 p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 flex-1">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl">
                    {honor.icon}
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-mono font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider text-sm">
                      {honor.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-600 dark:text-gray-400">
                      <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1">
                        {honor.type.toUpperCase()}
                      </span>
                      <span>{honor.date}</span>
                      <span>{honor.organization}</span>
                    </div>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <OutlineArrowRight
                    size={16}
                    className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width border at bottom of section */}
      <div className="relative">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 border-t border-gray-200 dark:border-gray-800"
        />
      </div>
    </section>
  );
}
