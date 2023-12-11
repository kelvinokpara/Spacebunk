import logo from "../assets/Icons/logo_icons/logo_full_light.png";
import EmailInput from "./EmailInput";

const Footer = () => {
  return (
    <div>
      <div className="py-12 flex max-md:flex-col flex-row  max-md:gap-8 gap-20 items-start max-sm:justify-center justify-between px_res">
        <ul className="flex flex-col gap-5 max-w-[350px]">
          <img src={logo} alt="logo" width={200} />
          <li className="footer_list">
            NFT marketplace UI created with Anima for Figma.
          </li>
          <li className="footer_list">Join our community</li>
          <div className="flex gap-4 items-center">
            <p>x</p>
            <p>x</p>
            <p>x</p>
            <p>x</p>
          </div>
        </ul>
        <ul className="flex flex-col gap-5 max-w-[350px]">
          <li className="footer_list_head">Explore</li>
          <li className="footer_list">Marketplace</li>
          <li className="footer_list">Rankings</li>
          <li className="footer_list">Connect a Wallet</li>
        </ul>
        <ul className="flex flex-col gap-5 max-w-[300px]">
          <li className="footer_list_head">Join Our Weekly Digest</li>
          <li className="footer_list">
            Get exclusive promotions & updates straight to your inbox.
          </li>
          <div className="flex">
            <EmailInput align={true} />
          </div>
        </ul>
      </div>
      {/* copyright */}
      <div className="pt-5 pb-10 border-t border-t-white">
        {" "}
        &copy; NFT Market. Use this template freely.
      </div>
    </div>
  );
};

export default Footer;
