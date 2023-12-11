import Button from "./Button";

const EmailInput = ({ align, icon }) => {
  return (
    <div
      className={`gap-4
          bg-white rounded-2xl flex flex-row items-center justify-center
          max-sm:flex-col max-sm:bg-transparent max-sm:w-full
      }`}
    >
      <input
        type="text"
        placeholder="Enter your email here"
        className={`md:max-w-[180px] max-sm:w-full max-md:px-4 pl-4 py-3 text-sm font-worksans rounded-full text-black  placeholder:text-neutral-900 placeholder:font-medium bg-transparent max-sm:bg-white outline-none
        }`}
      />

      <button
        className={`px-6 py-3 text-base font-semibold text-white flex justify-center items-center gap-3 bg-accent ${
          align === true ? "rounded-2xl" : " rounded-full"
        } max-sm:w-full max-sm:rounded-full`}
      >
        <span className={"text-white text-sm max-md:text-base max-xl:text-xl"}>
          {icon}
        </span>
        Subscribe
      </button>
    </div>
  );
};

export default EmailInput;
