const Button = ({ children, btnFill, rounded, icon }) => {
  return (
    <button
      className={`px-12 py-3 text-sm max-md:text-base max-xl:text-xl text-white flex place-items-center gap-3 ${
        btnFill === "outline"
          ? "bg-transparent border border-accent"
          : "bg-accent"
      } ${
        rounded === "full"
          ? " rounded-full"
          : rounded === "md"
          ? "rounded-xl"
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
