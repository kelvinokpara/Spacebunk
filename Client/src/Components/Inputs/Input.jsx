import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <div className="w-full rounded-full bg-white text-blackhue flex gap-3 px-5 items-center">
      <p>OO</p>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full py-4 bg-transparent placeholder:text-blackhue placeholder:font-worksans placeholder:text-base focus:outline-none rounded-full"
      />
    </div>
  );
};

export default Input;
