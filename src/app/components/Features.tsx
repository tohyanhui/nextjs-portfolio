const Features = () => (
  <section id="experience" className="flex min-h-[100svh] items-center border-y border-gray-200 bg-[#f2f6f4] py-24 dark:border-gray-800 dark:bg-dark-background-secondary">
    <div className="container mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-teal-300">Beyond the projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-gray-950 dark:text-white sm:text-4xl">Built in the real world.</h2>
          <p className="mt-5 max-w-sm leading-relaxed text-gray-600 dark:text-gray-300">From shipping AI tools in healthcare to helping other engineers build better software.</p>
        </div>
        <div className="divide-y divide-gray-300/80 border-t border-gray-300/80 dark:divide-gray-700 dark:border-gray-700">
          <article className="grid gap-3 py-7 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">May-Aug 2026</p>
            <div>
              <h3 className="text-xl font-semibold text-gray-950 dark:text-white">AI &amp; Software Engineering Intern</h3>
              <p className="mt-1 text-sm font-medium text-primary dark:text-teal-300">HMI Managed Healthcare</p>
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">Improved AI-assisted claims processing and deployed a fast document-redaction API. Worked across model evaluation, data pipelines, and production software.</p>
            </div>
          </article>
          <article className="grid gap-3 py-7 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">May-Aug 2026</p>
            <div>
              <h3 className="text-xl font-semibold text-gray-950 dark:text-white">Teaching Assistant</h3>
              <p className="mt-1 text-sm font-medium text-primary dark:text-teal-300">NUS · CP2106 Orbital</p>
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">Advised 13 student teams on project direction and milestones, with actionable feedback to help them improve their work.</p>
            </div>
          </article>
          <article className="grid gap-3 py-7 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Jan-Apr 2026</p>
            <div>
              <h3 className="text-xl font-semibold text-gray-950 dark:text-white">Teaching Assistant</h3>
              <p className="mt-1 text-sm font-medium text-primary dark:text-teal-300">NUS · CS2103T Software Engineering</p>
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">Led weekly software engineering tutorials covering architecture, design patterns, automated testing, CI/CD, and code review.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
