import React from "react";

const Skills = () => (
  <section
    id="skills"
    className="py-24 bg-gray-50 dark:bg-dark-background-secondary translate-y-4 transition-all duration-500 opacity-0"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        My Skills
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
        Technologies and tools I use to bring products to life
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Skill Card 1 */}
        <div className="bg-white dark:bg-dark-background p-8 rounded-lg">
          <div className="w-16 h-16 bg-orange-600/10 rounded-full flex items-center justify-center mb-6">
            <i className="fa-brands fa-html5 text-orange-600 text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">HTML5</h3>
          <div className="w-full h-2 bg-gray-200 dark:bg-dark-background rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-gradient-to-br from-primary to-secondary rounded-full"></div>
          </div>
        </div>
        {/* Skill Card 2 */}
        <div className="bg-white dark:bg-dark-background p-8 rounded-lg">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
            <i className="fa-brands fa-css3 text-blue-500 text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">CSS3</h3>
          <div className="w-full h-2 bg-gray-200 dark:bg-dark-background rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-gradient-to-br from-primary to-secondary rounded-full"></div>
          </div>
        </div>
        {/* Skill Card 3 */}
        <div className="bg-white dark:bg-dark-background p-8 rounded-lg">
          <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mb-6">
            <i className="fa-brands fa-js text-yellow-400 text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">JavaScript</h3>
          <div className="w-full h-2 bg-gray-200 dark:bg-dark-background rounded-full overflow-hidden">
            <div className="w-[90%] h-full bg-gradient-to-br from-primary to-secondary rounded-full"></div>
          </div>
        </div>
        {/* Skill Card 4 */}
        <div className="bg-white dark:bg-dark-background p-8 rounded-lg shadow-lg">
          <div className="w-16 h-16 bg-blue-700/10 rounded-full flex items-center justify-center mb-6">
            <i className="fa-brands fa-python text-blue-700 text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">Python</h3>
          <div className="w-full h-2 bg-gray-200 dark:bg-dark-background rounded-full overflow-hidden">
            <div className="w-[90%] h-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </div>
        {/* Skill Card 5 */}
        <div className="bg-white dark:bg-dark-background p-8 rounded-lg shadow-lg">
          <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
            <i className="fa-brands fa-java text-orange-500 text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">Java</h3>
          <div className="w-full h-2 bg-gray-200 dark:bg-dark-background rounded-full overflow-hidden">
            <div className="w-[95%] h-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </div>
        {/* Skill Card 6 */}
        <div className="bg-white dark:bg-dark-background p-8 rounded-lg shadow-lg">
          <div className="w-16 h-16 bg-blue-300/10 rounded-full flex items-center justify-center mb-6">
            <i className="fa-brands fa-react text-cyan-300 text-3xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-4">React Native</h3>
          <div className="w-full h-2 bg-gray-200 dark:bg-dark-background rounded-full overflow-hidden">
            <div className="w-[80%] h-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
