// ScrollToTopButton.js
"use client"; // Mark this as a Client Component

import React from "react";

export default function ScrollToTopButton({ isVisible }) {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-[#BF1A55] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[#9F1545] transition-colors z-50 ${
        isVisible ? "opacity-100 animate-fade-in" : "opacity-0 animate-fade-out"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}