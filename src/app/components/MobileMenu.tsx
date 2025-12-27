"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { navigationLinks } from "../config/navigation";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const menuContent = mounted ? createPortal(
    <div
      data-mobile-menu="true"
      className={`fixed left-0 top-0 z-[9999] w-screen h-screen bg-white dark:bg-dark-background transition-transform duration-300 md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <span className="text-xl font-extrabold">Toh Yan Hui</span>
            <span className="text-primary text-2xl ml-1">●</span>
          </div>
          <button 
            onClick={handleClose} 
            className="p-2"
            aria-label="Close mobile menu"
          >
            <FaTimes className="text-gray-600 dark:text-gray-400 text-2xl" />
          </button>
        </div>

        <ul className="flex-1 flex flex-col justify-center items-center space-y-8">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleClose}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  ) : null;

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
      {menuContent}
    </>
  );
};

export default MobileMenu;