// Calculate age dynamically
const calculateAge = () => {
  const birthDate = new Date("2001-07-11"); // Kris's birthday
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

// Calculate years of experience
const calculateExperience = () => {
  const startYear = 2016;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export default function AboutSection() {
  const age = calculateAge();
  const experience = calculateExperience();

  return (
    <section id="about">

      <div className="space-y-3">
        <div className="border-l-4 border-black dark:border-white pl-4 mb-3">
          <h2 className="text-lg font-mono font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
            About Me
          </h2>
        </div>

        <div className="prose prose-gray dark:prose-invert p-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m a passionate {age}-year-old designer and developer from Poland with {experience}+ years of experience
            creating beautiful digital experiences. My journey started in 2016 with design
            fundamentals, and I&apos;ve since evolved into building everything from mobile games
            to AI-powered tools.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently focused on game development with projects like TinyBuddies and SoundLess,
            while also working on innovative Minecraft mods and developer tools. I believe in
            creating technology that brings joy and solves real problems.
          </p>
        </div>
      </div>
    </section>
  );
}
