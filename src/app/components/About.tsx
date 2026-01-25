import Image from "next/image";

const About = () => (
  <section
    id="about"
    className="py-24 translate-y-4 transition-all duration-500 opacity-0"
  >
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            I'm a software developer focused on creating clean, efficient, and
            user-friendly software.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            My expertise spans HTML, CSS, JavaScript, Java and modern
            frameworks, enabling me to craft dynamic and engaging software that
            is both scalable and optimised. I always follow best coding
            practices to ensure high-quality, maintainable code.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            When I'm not coding, I enjoy exploring new technologies, watching
            tech-related content, and reading up on the latest trends in
            software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 shadow-blue-200/20 dark:shadow-blue-700/10 text-center"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              className="px-8 py-3 bg-white dark:bg-dark-background-secondary text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-72 h-72 mx-auto animate-morph bg-gradient-to-br from-primary via-secondary to-accent rounded-full relative overflow-hidden isolate">
            <Image
              src="/profile-1.png"
              alt="Toh Yan Hui - Software Developer portrait photo"
              fill
              sizes="288px"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
