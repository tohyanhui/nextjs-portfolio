import React from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const Header = () => (
  <>
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-dark-background/95 backdrop-blur-sm shadow-sm transition-all duration-300">
    <div className="container mx-auto px-4">
      <nav className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <span className="text-xl font-extrabold">Toh Yan Hui</span>
          <span className="text-primary text-2xl ml-1">●</span>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Showcase
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </div>
  </header>
  </>
);

export default Header;
