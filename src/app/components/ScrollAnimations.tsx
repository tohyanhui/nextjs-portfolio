"use client";

import { useEffect } from "react";

const ScrollAnimations = () => {
  useEffect(() => {
    const checkScroll = () => {
      const header = document.querySelector("header");
      
      // Header shadow
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add("shadow-md");
        } else {
          header.classList.remove("shadow-md");
        }
      }

      // Reveal animations for sections
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.85) {
          section.classList.add("opacity-100", "translate-y-0");
          section.classList.remove("opacity-0", "translate-y-4");
        }
      });
    };

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        const targetElement = targetId
          ? document.querySelector(targetId)
          : null;

        if (targetElement) {
          const header = document.querySelector("header");
          const headerHeight = header?.offsetHeight || 0;
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("scroll", checkScroll);
    document.addEventListener("click", handleAnchorClick);

    // Run on mount
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
};

export default ScrollAnimations;
