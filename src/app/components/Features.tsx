import { FaPaintBrush, FaCode, FaBolt, FaMobileAlt } from "react-icons/fa";

const Features = () => (
  <section id="features" className="py-24 bg-gray-50 dark:bg-dark-background-secondary translate-y-4 transition-all duration-500 opacity-0">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        What's in my Toolkit
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-16">
        Everything needed to build high-quality software.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature Card 1 */}
        <div className="bg-white dark:bg-dark-background p-8 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <FaPaintBrush className="text-primary text-xl" />
          </div>
          <h3 className="text-xl font-bold mb-4">Modern UI Design</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Creating beautiful, responsive interfaces that look great on any device using the latest design trends.
          </p>
        </div>
        {/* Feature Card 2 */}
        <div className="bg-white dark:bg-dark-background p-8 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <FaCode className="text-primary text-xl" />
          </div>
          <h3 className="text-xl font-bold mb-4">Clean Code</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Writing maintainable, efficient code following best practices and modern development standards.
          </p>
        </div>
        {/* Feature Card 3 */}
        <div className="bg-white dark:bg-dark-background p-8 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <FaBolt className="text-primary text-xl" />
          </div>
          <h3 className="text-xl font-bold mb-4">Performance Optimisation</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Ensuring fast load times and smooth experiences through efficient code and asset optimisation.
          </p>
        </div>
        {/* Feature Card 4 */}
        <div className="bg-white dark:bg-dark-background p-8 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <FaMobileAlt className="text-primary text-xl" />
          </div>
          <h3 className="text-xl font-bold mb-4">Responsive Development</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Crafting web and mobile software that scales and functions perfectly across all screen sizes.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;

