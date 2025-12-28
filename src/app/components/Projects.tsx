import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Projects = () => (
  <section
    id="projects"
    className="py-24 translate-y-4 transition-all duration-500 opacity-0"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Featured Projects
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
        Check out some of my recent work
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="bg-white dark:bg-dark-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src="/item-1.png"
              alt="Momo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Momo</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[4rem]">
              A task management system with a GUI optimized for command-line
              style interactions.
            </p>
            <div className="flex flex-wrap gap-2 my-6">
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                Java
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                JavaFX
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                CSS
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                Gradle
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/tohyanhui/ip"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="View Momo project on GitHub"
              >
                <FaGithub className="mr-2" />
                Code
              </a>
            </div>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="bg-white dark:bg-dark-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src="/item-2.png"
              alt="TokTok"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">TokTok</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[4rem]">
              A machine learning–based system using DeBERTa to classify online
              reviews automatically.
            </p>
            <div className="flex flex-wrap gap-2 my-6">
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                PyTorch
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                Hugging Face
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                Pandas
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                Scikit-learn
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                Streamlit
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                Google Colab
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/tohyanhui/TikTokTechJam2025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="View TokTok project on GitHub"
              >
                <FaGithub className="mr-2" />
                Code
              </a>
            </div>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="bg-white dark:bg-dark-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src="/item-3.png"
              alt="LinkedPair"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">LinkedPair</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[4rem]">
              A React Native app using natural language processing with OpenAI
              embeddings to match NUS students.
            </p>
            <div className="flex flex-wrap gap-2 my-6">
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                React Native
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                Firebase
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                OpenAI API
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-background-secondary text-gray-600 dark:text-gray-400 rounded-full text-sm">
                Expo
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/tohyanhui/linkedpair"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="View LinkedPair project on GitHub"
              >
                <FaGithub className="mr-2" />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
