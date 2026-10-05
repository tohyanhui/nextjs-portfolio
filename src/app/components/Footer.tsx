"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { navigationLinks, socialLinks } from "../config/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-background border-t border-gray-200 dark:border-gray-800 py-10">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-6 text-center md:grid-cols-[1fr_auto_1fr] md:text-left mb-8">
          <div>
            <span className="text-lg font-bold">Toh Yan Hui</span>
          </div>
          <ul className="mx-auto flex flex-wrap justify-center gap-x-4 gap-y-2 max-[359px]:max-w-[220px]">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-teal-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-4 md:justify-end">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Visit GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={socialLinks.twitter}
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
