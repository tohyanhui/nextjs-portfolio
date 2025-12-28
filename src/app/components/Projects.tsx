import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { projects } from "../config/navigation";

const Projects = () => (
  <section
    id="projects"
    className="py-24 bg-white dark:bg-dark-background translate-y-4 transition-all duration-500 opacity-0"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Featured Projects
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
        Check out some of my recent work
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-dark-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-transparent dark:ring-1 dark:ring-gray-800 dark:shadow-blue-500/10"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[4rem]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 my-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label={`View ${project.title} project on GitHub`}
                >
                  <FaGithub className="mr-2" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
