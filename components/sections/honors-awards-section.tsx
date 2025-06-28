import { OutlineArrowRight } from "@/icons/Icons";

const honors: {
  title: string;
  type: string;
  date: string;
  organization: string;
  icon: string;
}[] = [
    // {
    //   title: "None Yet",
    //   type: "Type",
    //   date: "01.2025",
    //   organization: "Organization",
    //   icon: "🏆"
    // },
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
    <>
      {honors.map((honor, index) => (
        <section id="honors" key={index}>
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

            <div className="space-y-px bg-foreground/[0.02] pt-px">
              <div className="group bg-background p-6 hover:bg-foreground/[0.02] transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="w-12 h-12 bg-foreground/[0.02] flex items-center justify-center text-xl">
                      {honor.icon}
                    </div>
                    <div className="space-y-2 flex-1">
                      <h3 className="font-mono font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider text-sm">
                        {honor.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs font-mono text-gray-600 dark:text-gray-400">
                        <span className="bg-foreground/[0.02] px-2 py-1">
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
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
