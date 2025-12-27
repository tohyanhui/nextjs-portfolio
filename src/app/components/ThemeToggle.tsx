"use client";

import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or prefer-color-scheme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
      document
        .querySelector("meta[name='theme-color']")
        ?.setAttribute("content", "#000000");
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const isDarkMode = html.classList.contains("dark");

    setIsDark(isDarkMode);

    if (isDarkMode) {
      document
        .querySelector("meta[name='theme-color']")
        ?.setAttribute("content", "#000000");
      localStorage.setItem("theme", "dark");
    } else {
      document
        .querySelector("meta[name='theme-color']")
        ?.setAttribute("content", "#0070f3");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button onClick={toggleTheme} className="">
      <i
        className={`fa-solid ${
          isDark ? "fa-sun" : "fa-moon"
        } text-gray-600 dark:text-gray-400`}
      ></i>
    </button>
  );
};

export default ThemeToggle;
