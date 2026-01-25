"use client";

import React, { useEffect, useState } from "react";

const TerminalAnimation = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const fullCommand = "git clone https://github.com/tohyanhui/repository.git";

  useEffect(() => {
    let currentIndex = 0;
    setDisplayText("");
    setShowCursor(false);

    const typingInterval = setInterval(() => {
      if (currentIndex < fullCommand.length) {
        setDisplayText(fullCommand.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(true);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-dark-background-secondary rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto border border-gray-200 dark:border-transparent dark:ring-1 dark:ring-gray-800 dark:shadow-blue-500/10">
      <div className="flex items-center space-x-2 p-3 bg-gray-200 dark:bg-dark-background">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <div className="p-4 sm:p-6 font-mono">
        <div className="text-xs sm:text-base">
          <span className="text-green-500">$</span>{" "}
          <span className="text-gray-900 dark:text-white break-words sm:whitespace-nowrap">
            {displayText}
          </span>
          {showCursor && (
            <span className="inline-block w-2 h-5 bg-gray-900 dark:bg-white ml-1 animate-blink align-middle"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalAnimation;
