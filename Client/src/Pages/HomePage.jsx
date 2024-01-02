import HeroSection from "../Components/Sections/HeroSection";
import SectionHead from "../Components/Sections/SectionHead";
import TrendingSection from "../Components/Sections/TrendingSection";

const HomePage = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
