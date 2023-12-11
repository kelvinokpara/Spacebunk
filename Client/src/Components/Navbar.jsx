import Logo from "../assets/Icons/logo_icons/logo_full_light.png";
import Button from "./Button";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center box-border py-3 md:py-4 lg:py-5">
      <img
        src={Logo}
        alt="logo"
        className="w-[100px] sm:w-[160px] lg:w-[220px]"
      />
      <ul className="flex justify-center items-center gap-8 max-lg:hidden">
        <li className="cursor-pointer hover:text-accent transition-all duration-300">
          Marketplace
        </li>
        <li className="cursor-pointer hover:text-accent transition-all duration-300">
          Rankings
        </li>
        <li className="cursor-pointer hover:text-accent transition-all duration-300">
          Connect a wallet
        </li>
        <Button btnFill={"fill"} rounded={"md"}>
          Sign Up
        </Button>
      </ul>
      <CgMenuLeft className="text-white hover:text-accent transition-all duration-300 lg:hidden text-xl" />
    </div>
  );
};

export default Navbar;
