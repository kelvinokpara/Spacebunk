import Button from "../Components/Button";
import heroImg from "../assets/Images/heroanimationimg.gif";

const HomePage = () => {
  const heroData = [
    {
      value: "240k+",
      label: "Total Sale",
    },
    {
      value: "100k+",
      label: "Auctions",
    },
    {
      value: "250k+",
      label: "Artists",
    },
  ];

  return (
    <div>
      {/*hero section  */}
      <div
        id="heroSection"
        // className="flex flex-wrap items-center px-10 py-20 gap-20"
        className="grid items-center px_res py-20 gap-20 max-sm:gap-8 grid_res"
      >
        <div className="max-w-1/2 flex flex-col gap-7 basis-1/2 max-sm:justify-center">
          <h1 className="text-white font-spacemono font-bold max-sm:text-center">
            Discover digital art & Collect NFTs
          </h1>
          <p className="font-worksans text-fontmd font-normal leading-[160%] max-sm:text-center">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div className="flex max-sm:justify-center items-center">
            <Button btnFill={"fill"} rounded={"md"}>
              Get Started
            </Button>
          </div>
          <div className=" items-start gap-14 flex max-sm:justify-center max-sm:gap-8 ">
            {heroData.map((data, index) => (
              <div key={index}>
                <h4 className="text-white font-spacemono font-bold max-md:text-[20px]">
                  {data.value}
                </h4>
                <p className="font-normal max-md:text-base text-[24px] font-worksans leading-[160%] ">
                  {data.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={heroImg}
          alt=""
          // width={410}
          // height={410}
          className="w-full flex-grow"
        />
      </div>
      {/*  */}
    </div>
  );
};

export default HomePage;
