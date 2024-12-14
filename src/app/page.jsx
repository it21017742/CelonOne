import * as React from "react";
import InfoCard from "@/components/ServiceCard/servicecard";
import NavigationLink from "@/components/NavLink/navlink";
import { cardData } from "@/data/content";

export default function LandingPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-gray-950 pb-[808px] max-md:pb-24">
      <div className="flex flex-col w-full font-bold text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
        <div className="flex relative flex-col items-center px-20 pt-4 w-full min-h-[747px] max-md:px-5 max-md:max-w-full"> {/* Reduced pt-8 to pt-4 */}
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
            <div className="flex gap-10 my-auto">
              <NavigationLink isActive={true}>Home</NavigationLink>
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
          <div className="relative z-10 mt-14 mb-0 text-6xl max-md:mt-10 max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
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
      {/* Added ID to "What We Do" section */}
      <div
        id="what-we-do"
        className="flex flex-col items-center px-20 pt-56 pb-32 w-full bg-gray-950 max-md:px-5 max-md:py-24 max-md:max-w-full"
      >
        <div className="flex flex-col items-center mb-0 w-full max-w-[1708px] max-md:mb-2.5 max-md:max-w-full">
          <div className="text-6xl font-bold text-pink-700 max-md:text-4xl">
            <span className="text-white">What We Do</span> .
          </div>
          <div className="mt-9 text-xl text-center text-white max-md:max-w-full">
            At CelonOne, we empower businesses to unlock their potential by
            delivering tailored software solutions that adapt to today's
            fast-paced, technology-driven world. Our mission is to transform
            ideas into impactful, scalable outcomes.
          </div>
          <div className="flex flex-wrap gap-5 justify-between mt-52 w-full max-w-[1487px] max-md:mt-10 max-md:max-w-full">
            {[1, 2, 3, 4].map((index) => (
              <img
                key={index}
                loading="lazy"
                src="/Images/servicephoto.png"
                className="object-contain shrink-0 max-w-full aspect-[1.08] w-[146px]"
                alt={`Feature icon ${index}`}
              />
            ))}
          </div>
          <div className="self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {cardData.map((card, index) => (
                <InfoCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
