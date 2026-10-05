import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { projects } from "../config/navigation";

const projectOrder = ["toktok", "linkedpair", "momo"];

const Projects = () => (
  <section id="projects" className="flex min-h-[100svh] items-center py-24">
    <div className="container mx-auto max-w-6xl px-5 sm:px-8">
      <div className="mb-8 sm:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary dark:text-teal-300">Selected work</p>
        <h2 className="mt-4 text-3xl font-semibold text-gray-950 dark:text-white sm:text-4xl">Projects worth opening.</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {[...projects].sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id)).map((project, index) => (
          <article key={project.id} className="flex min-w-0 flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-colors hover:border-primary dark:border-gray-700 dark:bg-dark-background-secondary dark:hover:border-teal-300">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col border-t border-gray-200 p-6 dark:border-gray-700">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-primary dark:text-teal-300">0{index + 1} / PROJECT</span>
                  <h3 className="mt-2 text-2xl font-semibold text-gray-950 dark:text-white">{project.title}</h3>
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} project on GitHub`} title={`View ${project.title} on GitHub`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-800 transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-gray-600 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-300"><LuArrowUpRight aria-hidden="true" size={20} /></a>
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 border-t border-gray-200 pt-4 text-xs font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
                {project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
