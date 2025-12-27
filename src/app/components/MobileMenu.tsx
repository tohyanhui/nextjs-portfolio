"use client";

import React, { useState, useEffect } from "react";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className="md:hidden p-2" 
        onClick={handleToggle}
        aria-label="Toggle mobile menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all" />
          <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all" />
          <span className="w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all" />
        </div>
      </button>

      <div
        data-mobile-menu="true"
        className={`fixed inset-0 z-[9999] transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-full px-4 flex flex-col">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-xl font-extrabold">Toh Yan Hui</span>
              <span className="text-primary text-2xl ml-1">●</span>
            </div>
            <button 
              onClick={handleClose} 
              className="p-2"
              aria-label="Close mobile menu"
            >
              <i className="fa-solid fa-square-xmark text-gray-600 dark:text-gray-400 text-2xl" />
            </button>
          </div>

          <ul className="flex-1 flex flex-col justify-center items-center space-y-8">
            <li>
              <a
                href="#features"
                onClick={handleClose}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Showcase
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleClose}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={handleClose}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={handleClose}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleClose}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
