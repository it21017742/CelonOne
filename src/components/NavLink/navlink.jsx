export default function NavigationLink({ children, isActive }) {
    return (
      <div
        className={`${
          isActive ? "text-white" : "text-white"
        } cursor-pointer transition-colors duration-300 hover:text-[#BF1A55]`}
        tabIndex={0}
        role="button"
      >
        {children}
      </div>
    );
  }
  