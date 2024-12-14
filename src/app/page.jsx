"use client";

import * as React from "react";
import InfoCard from "@/components/ServiceCard/servicecard";
import NavigationLink from "@/components/NavLink/navlink";
import { cardData } from "@/data/content";

export default function LandingPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Handle scroll event to show or hide the "Up Arrow" button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex overflow-hidden flex-col bg-gray-950 pb-[808px] max-md:pb-24">
      {/* Header Section */}
      <div className="flex flex-col w-full font-bold text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
        <div className="flex relative flex-col items-center px-20 pt-8 w-full min-h-[747px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="/Images/background1.png"
            className="object-cover absolute inset-0 size-full"
            alt="Background image"
          />
          <div className="flex relative flex-wrap gap-5 justify-between self-stretch w-full text-xl font-medium max-w-[1720px] max-md:max-w-full">
            <img
              loading="lazy"
              src="/Images/LogoNew.png"
              className="object-contain shrink-0 max-w-full aspect-[1.5] w-[216px]"
              alt="Company logo"
            />

            {/* Hamburger Icon for Mobile View */}
            <button
              className="block lg:hidden text-white"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Navigation Menu */}
            <div
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } fixed inset-0 z-50 bg-black bg-opacity-75 justify-center items-center`}
            >
              <div className="flex flex-col items-center bg-gray-950 w-3/4 max-w-md py-8 rounded-lg">
                {/* Close (X) Button */}
                <button
                  onClick={closeMenu}
                  className="absolute top-4 right-4 text-white text-4xl"
                >
                  X
                </button>

                {/* Navigation Links */}
                <div className="flex flex-col gap-6 text-2xl text-white">
                  <NavigationLink href="#what-we-do" onClick={closeMenu}>
                    Services
                  </NavigationLink>
                  <NavigationLink href="/new-feature" onClick={closeMenu}>
                    Projects
                  </NavigationLink>
                  <NavigationLink onClick={closeMenu}>Contact Us</NavigationLink>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-10 my-auto">
              <NavigationLink href="#what-we-do">Services</NavigationLink>
              <NavigationLink href="/new-feature">Projects</NavigationLink>
              <NavigationLink>Contact Us</NavigationLink>
            </div>
          </div>
          <div className="relative mt-48 text-9xl text-center max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            We are
            <br />
            CelonOne
          </div>
          <div className="relative z-10 mt-14 mb-0 text-6xl text-center max-md:mt-10 max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
            <span>Building the Digital World of Tomorrow</span>
            <span className="text-pink-700">.</span>
          </div>
        </div>
        <img
          loading="lazy"
          src="/Images/background2.png"
          className="object-contain mt-40 w-full aspect-[5.92] max-md:mt-10 max-md:max-w-full"
          alt="Decorative wave pattern"
        />
      </div>

      {/* "What Drives Us" Section */}
      <div
        id="what-we-do"
        className="flex flex-col items-center px-20 py-32 w-full bg-gray-950 max-md:px-5 max-md:py-12 max-md:max-w-full"
      >
        <div className="flex flex-col items-center w-full max-w-[1708px] max-md:max-w-full">
          {/* Section Title */}
          <div className="text-6xl font-bold text-pink-700 text-center max-md:text-4xl">
            <span className="text-white">What Drives Us</span>
          </div>

          {/* Description */}
          <div className="mt-8 text-xl text-center text-white max-w-4xl leading-relaxed max-md:mt-5 max-md:text-base">
            At CelonOne, we're passionate about transforming ideas into powerful
            digital solutions. Our mission is to deliver innovative, customer-focused
            software that drives success and fuels growth for businesses worldwide.
          </div>

          {/* Cards Section */}
          <div className="flex gap-12 justify-center mt-20 w-full max-w-[1708px] max-md:flex-col max-md:mt-10">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-1/4 px-5 max-md:w-full"
              >
                {/* Image */}
                <img
                  loading="lazy"
                  src={`/Images/servicephoto${index + 1}.png`}
                  className="w-24 h-24 object-contain mb-5"
                  alt={`Service ${index + 1}`}
                />

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-2">{card.title}</h3>

                {/* Description */}
                <p className="text-lg text-zinc-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Up Arrow Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-pink-700 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition-all"
        >
          ↑
        </button>
      )}
    </div>
  );
}
