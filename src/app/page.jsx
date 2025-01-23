"use client";

import * as React from "react";
import InfoCard from "@/components/ServiceCard/servicecard";
import NavigationLink from "@/components/NavLink/navlink";
import { cardData } from "@/data/content";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton"; // Import the Client Component

export default function LandingPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({});

  // Handle scroll event to show or hide the "Up Arrow" button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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

  // Form validation
  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Valid phone number is required (10 digits)";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, handle submission (e.g., send data to server)
      console.log("Form submitted:", formData);
      setFormErrors({});
    } else {
      // Form is invalid, show errors
      setFormErrors(errors);
    }
  };

  return (
    <div className="flex overflow-hidden flex-col bg-gradient-to-r from-[#07011C] via-[#07011C] to-[#27072D] pb-[808px] max-md:pb-24">
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
                  <NavigationLink href="#contact-us" onClick={closeMenu}>Contact Us</NavigationLink>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-10 my-auto">
              <NavigationLink href="#what-we-do">Services</NavigationLink>
              <NavigationLink href="/new-feature">Projects</NavigationLink>
              <NavigationLink href="#contact-us">Contact Us</NavigationLink>
            </div>
          </div>
          <div className="relative mt-28 text-8xl text-center max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            We are
            <br />
            Ceylon One
          </div>
          <div className="relative z-10 mt-14 mb-0 text-4xl text-center max-md:mt-10 max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
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
        className="flex flex-col items-center px-20 py-32 w-full bg-gray-950 max-md:px-5 max-md:py-12 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1708px] max-md:max-w-full">
          {/* Section Title */}
          <div className="text-6xl font-bold text-pink-700 text-center max-md:text-4xl">
            <span className="text-white">What Drives Us</span>
          </div>

          {/* Description */}
          <div className="mt-8 text-xl text-center text-white max-w-4xl leading-relaxed max-md:mt-5 max-md:text-base">
            At Ceylon One, we're passionate about transforming ideas into powerful
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
                  className="w-24 h-24 object-contain mb-6"
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
      <img
            loading="lazy"
            src="/Images/background3.png"
            alt="Top decorative border"
            className="object-contain z-10 mt-0 w-full aspect-[5.92] max-md:max-w-full"
          />

      {/* GlobalSection */}
      <div className="flex flex-col pt-14 pb-32 text-8xl font-bold text-center text-white max-md:pb-24 max-md:text-4xl">
        <div className="flex flex-col w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full max-md:text-4xl">
          <div className="flex relative flex-col self-center px-1 pt-36 pb-72 mt-14 max-w-full min-h-[747px] w-[1404px] max-md:pt-24 max-md:pb-28 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:w-full">
            <img
              loading="lazy"
              src="/Images/bgworldmap.png"
              alt="Background world map showing global connectivity"
              className="object-cover absolute inset-0 size-full opacity-20 max-md:opacity-10"
            />
            <div className="relative z-10">
              <span className="font-lalezar block text-center max-md:text-2xl">
                Connecting visions across borders, driving progress everywhere
                <span className="text-pink-700" aria-hidden="true">
                  .
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <img
            loading="lazy"
            src="/Images/background2.png"
            alt="Bottom decorative border"
            className="object-contain z-10 mb-0 w-full aspect-[5.92] max-md:mb-2.5 max-md:max-w-full"
          />
          
      {/* Saviru Section */}
      <div className="relative flex items-center justify-center min-h-screen bg-[#050710]">
        {/* Project Card */}
        <div className="relative flex flex-col items-center p-4 sm:p-8 text-center rounded-2xl shadow-lg bg-gradient-to-b from-[#0E0B1F] to-[#1A0B2E] border-2 border-transparent outline outline-4 outline-purple-500 w-[90%] sm:w-[80%] md:w-[60%] lg:max-w-[600px] z-10">
          {/* Title */}
          <h2 className="text-xl sm:text-3xl font-bold text-white">
            Saviru: Digitalizing the Vegetable Supply Chain
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-stone-300">
            Saviru is our innovative solution designed to revolutionize the
            vegetable supply chain. By integrating advanced digital tools, we aim
            to streamline the journey from farm to table, ensuring efficiency,
            transparency, and sustainability. Saviru empowers farmers,
            distributors, and retailers by providing real-time insights, reducing
            wastage, and fostering fair trade practices.
          </p>

          {/* View More Button */}
          <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 mt-6 sm:mt-8 text-sm sm:text-base text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
            <span>View more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Divider Image Outside the Section */}
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px]">
        <img
          loading="lazy"
          src="/Images/background3.png"
          alt="Section Divider"
          className="absolute inset-x-0 -top-[50%] w-full h-full object-cover"
        />
      </div>


      {/* Contact Us Section */}
      <div id="contact-us" className="flex flex-col pt-14 pb-32 rounded-none max-md:pb-24">
        <div className="flex flex-col items-center w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
          <div className="flex relative z-10 flex-col self-stretch px-16 pt-72 pb-0 mt-0 w-full text-6xl font-bold text-pink-700 min-h-[324px] max-md:px-5 max-md:pt-24 max-md:pb-2.5 max-md:max-w-full max-md:text-4xl">
            <div className="flex justify-center items-center text-center">
              <span className="text-white">Write us a message</span>
            </div>
          </div>
          <div className="mt-14 text-xl text-center text-white max-md:mt-10 max-md:max-w-full">
            Let's talk about how Ceylon One can help your next project get to the next level.
          </div>
          <form className="mt-28 max-w-full w-[1127px] max-md:mt-10 max-md:w-full max-md:px-5" onSubmit={handleSubmit}>
            <div className="flex gap-5 max-md:flex-col max-md:items-center">
              <div className="flex flex-col w-[35%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col w-full text-xl text-left text-white max-md:mt-8">
                  {/* Input Fields */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`px-5 py-6 w-full whitespace-nowrap rounded-md bg-indigo-950 text-white focus:bg-7F19E9 focus:outline-none ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className={`mt-9 px-5 py-6 w-full whitespace-nowrap rounded-md bg-indigo-950 text-white focus:bg-7F19E9 focus:outline-none ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className={`mt-9 px-5 py-6 w-full whitespace-nowrap rounded-md bg-indigo-950 text-white focus:bg-7F19E9 focus:outline-none ${
                      formErrors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                <div className="relative">
                  <label htmlFor="message" className="sr-only">Write your message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message"
                    className={`grow px-8 pt-5 pb-56 w-full text-xl text-left rounded-md bg-indigo-950 text-white focus:bg-7F19E9 focus:outline-none max-md:px-5 max-md:pb-24 max-md:mt-8 max-md:max-w-full ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                    aria-label="Write your message"
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>
              </div>
            </div>
            {/* SendButton Component */}
            <button
              type="submit"
              className="flex gap-2 self-start px-16 py-7 mt-9 font-bold bg-pink-700 rounded-md text-white max-md:px-5 max-md:mt-5 max-md:w-full max-md:justify-center"
            >
              <div className="self-start basis-auto">Send Message</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4699ec4a9141289eea96991af7610a7bcebd5a5093dc3283a8fdec787d71a89?placeholderIfAbsent=true&apiKey=f9a871e269514000aa736e216f8d8180"
                alt=""
                className="object-contain shrink-0 aspect-[1.16] w-[35px]"
              />
            </button>
          </form>
          <div className="mt-32 text-3xl text-center text-white max-md:mt-10">
            Reach out to us via email at:
          </div>
          <div className="flex relative z-10 flex-col self-stretch px-16 pt-0 pb-56 mt-10 mb-0 w-full text-5xl font-bold text-white whitespace-nowrap min-h-[324px] max-md:px-5 max-md:pb-28 max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
            <img
              loading="lazy"
              src="/Images/background2.png"
              alt="Bottom decorative border"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex justify-center items-center text-center">
              hello@CeylonOne.com
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      <ScrollToTopButton isVisible={isVisible} />
    </div>
  );
}