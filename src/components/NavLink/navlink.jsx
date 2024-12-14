'use client';

export default function NavigationLink({ children, href, isActive }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (href && href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop;

        // Smooth scroll logic
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth", // Enables smooth scrolling animation
        });
      }
    } else {
      // Allow normal navigation for non-hash links
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${
        isActive ? "text-white" : "text-white"
      } cursor-pointer transition-colors duration-300 hover:text-[#BF1A55]`}
    >
      {children}
    </a>
  );
}
