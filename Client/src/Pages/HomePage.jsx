import CategoriesSection from "../Components/Sections/CategoriesSection";
import HeroSection from "../Components/Sections/HeroSection";
import SectionHead from "../Components/Sections/SectionHead";
import TopCreatorSection from "../Components/Sections/TopCreatorSection";
import TrendingSection from "../Components/Sections/TrendingSection";
import DiscoverNftSection from "../Components/Sections/DiscoverNftSection";
import HowItWorksSection from "../Components/Sections/HowItWorksSection";
// react icons import
import { PiRocketLaunch } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import WeeklyDigest from "../Components/Sections/WeeklyDigest";

const HomePage = () => {
  return (
    <div className="px_page flex flex-col lg:gap-y-40 gap-y-20">
      {/*hero section  */}
      <HeroSection />
      {/*  */}
      <SectionHead
        head={"Trending Collections"}
        sub={"Checkout our weekly updated trending collection."}
        btn={{
          btnFill: "outline",
          children: "View more",
          icon: "",
          rounded: "md",
        }}
      >
        <TrendingSection />
      </SectionHead>
      {/*  */}
      <SectionHead
        head={"Top Creators"}
        sub={"Checkout Top Rated Creators on the NFT Marketplace."}
        btn={{
          btnFill: "outline",
          children: "View Rankings",
          icon: <PiRocketLaunch />,
          rounded: "md",
        }}
      >
        <TopCreatorSection />
      </SectionHead>
      {/*  */}
      <SectionHead head={"Top Creators"} noBtn={true}>
        <CategoriesSection />
      </SectionHead>
      {/*  */}
      <SectionHead
        head={"Discover More NFTs"}
        sub={"Explore new trending NFTs."}
        btn={{
          btnFill: "outline",
          children: "See All",
          icon: <IoEyeOutline />,
          rounded: "md",
        }}
      >
        <DiscoverNftSection />
      </SectionHead>
      {/*  */}
      <SectionHead
        head={"How It Works"}
        sub={"Find out how to get started"}
        noBtn={true}
      >
        <HowItWorksSection />
      </SectionHead>
      {/*  */}
      <SectionHead noBtn={true}>
        <WeeklyDigest />
      </SectionHead>
      {/*  */}
    </div>
  );
};

export default HomePage;
