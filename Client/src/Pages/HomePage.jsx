import Button from "../Components/Button";
import heroImg from "../assets/Images/heroanimationimg.gif";

const HomePage = () => {
  return (
    <div
      id="heroSection"
      className="flex flex-wrap items-center justify-between px-10 py-20"
    >
      <div className="w-1/2 flex flex-col gap-7">
        <h1 className="text-white font-spacemono font-bold">
          Discover digital art & Collect NFTs
        </h1>
        <p className="font-worksans text-fontmd font-normal leading-[160%]">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <div>
          <Button btnFill={"fill"} rounded={"md"}>
            Get Started
          </Button>
        </div>
        <div></div>
      </div>
      <img
        src={heroImg}
        alt=""
        width={510}
        height={510}
        className="max-lg:w-full"
      />
    </div>
  );
};

export default HomePage;
