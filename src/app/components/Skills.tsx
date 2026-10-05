const groups = [
  { number: "01", title: "AI & machine learning", items: ["Python", "PyTorch", "Hugging Face", "scikit-learn", "NumPy", "pandas"] },
  { number: "02", title: "Software development", items: ["Java", "TypeScript", "JavaScript", "SQL", "C / C++", "HTML", "CSS"] },
  { number: "03", title: "Platforms & tools", items: ["React Native", "FastAPI", "Docker", "Firebase", "PostgreSQL", "MongoDB", "Azure"] },
];

const Skills = () => (
  <section id="skills" className="flex min-h-[100svh] items-center border-t border-gray-200 py-24 dark:border-gray-800">
    <div className="container mx-auto max-w-6xl px-5 sm:px-8">
      <div className="mb-8 sm:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-teal-300">Toolbox</p>
        <h2 className="mt-4 text-3xl font-semibold text-gray-950 dark:text-white sm:text-4xl">Skills that connect the dots.</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
        {groups.map((group) => (
          <div key={group.number} className="border-t-2 border-gray-950 pt-5 dark:border-teal-300">
            <span className="text-xs font-semibold text-primary dark:text-teal-300">{group.number}</span>
            <h3 className="mt-3 mb-5 text-lg font-semibold text-gray-950 dark:text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => <span key={item} className="rounded border border-gray-200 bg-[#f8faf9] px-3 py-1.5 text-sm text-gray-700 dark:border-gray-700 dark:bg-dark-background-secondary dark:text-gray-200">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
