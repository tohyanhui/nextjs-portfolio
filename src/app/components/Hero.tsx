import React from "react";
import TerminalAnimation from "./TerminalAnimation";

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
  >
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Software Developer
          </span>{" "}
          For Web &amp; Mobile
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Building <strong>innovative web &amp; mobile software</strong> that
          delivers seamless, user-centered experiences powered by cutting-edge
          technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 shadow-blue-200/20 dark:shadow-blue-700/10"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-white dark:bg-dark-background-secondary text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-900 dark:hover:border-white transition-colors"
          >
            Learn More
          </a>
        </div>
        <TerminalAnimation />
      </div>
    </div>
  </section>
);

export default Hero;
