import EmailInput from "../Inputs/EmailInput";
import ctaImg from "../../assets/Images/cta-section.png";
import { FiMail } from "react-icons/fi";

const WeeklyDigest = () => {
  return (
    <div className="xl:w-[1050px] flex md:flex-wrap lg:flex-nowrap md:gap-20 justify-center items-center max-sm:gap-7 max-sm:flex-col md:p-[60px] md:bg-bgGrey1 rounded-[20px]">
      <img src={ctaImg} alt="" className="max-w-[400px]" />
      <div className="flex flex-col gap-y-10">
        <div className="md:w-4/6 lg:w-5/6 flex flex-col gap-y-5">
          <h3 className="font-worksans text-4xl max-lg:text-3xl font-semibold leading-[120%]">
            Join Our Weekly Digest
          </h3>
          <p className="font-worksans text-lg leading-[160%]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
        </div>
        <EmailInput align={true} icon={<FiMail />} />
      </div>
    </div>
  );
};

export default WeeklyDigest;
