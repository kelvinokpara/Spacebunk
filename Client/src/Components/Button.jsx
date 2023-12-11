const Button = ({ children, btnFill, rounded, icon }) => {
  return (
    <button
      className={`px-10 py-3 text-base max-xl:text-xl font-semibold text-white flex justify-center items-center gap-3 ${
        btnFill === "outline"
          ? "bg-transparent border border-accent"
          : "bg-accent"
      } ${
        rounded === "full"
          ? " rounded-full"
          : rounded === "md"
          ? "rounded-2xl"
          : ""
      } hover:translate-x-1 hover:translate-y-[-2px] hover:shadow-md hover:shadow-black transition duration-300`}
    >
      <span
        className={` ${
          btnFill === "outline" ? "text-accent" : "text-white"
        } text-sm max-md:text-base max-xl:text-xl`}
      >
        {icon}
      </span>
      {children}
    </button>
  );
};

export default Button;
