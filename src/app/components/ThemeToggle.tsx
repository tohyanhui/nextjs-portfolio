"use client";

import { useEffect, useSyncExternalStore } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const isDark = useSyncExternalStore(
    (callback) => {
      window.addEventListener("portfolio-theme-change", callback);
      return () => window.removeEventListener("portfolio-theme-change", callback);
    },
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );

  useEffect(() => {
    // Check for saved theme preference or prefer-color-scheme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      window.dispatchEvent(new Event("portfolio-theme-change"));
      document
        .querySelector("meta[name='theme-color']")
        ?.setAttribute("content", "#111416");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const isDarkMode = html.classList.contains("dark");

    window.dispatchEvent(new Event("portfolio-theme-change"));

    if (isDarkMode) {
      document
        .querySelector("meta[name='theme-color']")
        ?.setAttribute("content", "#111416");
      localStorage.setItem("theme", "dark");
    } else {
      document
        .querySelector("meta[name='theme-color']")
        ?.setAttribute("content", "#f8faf9");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <LuSun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      ) : (
        <LuMoon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
