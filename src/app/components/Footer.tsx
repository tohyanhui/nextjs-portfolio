"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { navigationLinks, socialLinks } from "../config/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-background-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-xl font-extrabold">Toh Yan Hui</span>
            <span className="text-primary text-2xl ml-1">●</span>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 mb-0">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <a
              href="https://github.com/tohyanhui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Visit GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tohyanhui/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/tohyanhui01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Visit X (Twitter) profile"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Toh Yan Hui Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
