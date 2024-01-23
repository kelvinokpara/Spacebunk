import CreatorList from "../Components/CreatorList";
import CreatorTab from "../Components/CreatorTab";
import TabFilter from "../Components/TabFilter";
import creatorImage from "../assets/Images/creators/Asset 12 2-12.png";

const RankingPage = () => {
  const creators = [
    {
      image: creatorImage,
      name: "Miracle Gouse",
      change: "+1.41%",
      nftSold: "602",
      volume: "12.4 ETH",
    },
    {
      image: creatorImage,
      name: "Miracle Gouse",
      change: "+1.41%",
      nftSold: "602",
      volume: "12.4 ETH",
    },
    {
      image: creatorImage,
      name: "Miracle Gouse",
      change: "+1.41%",
      nftSold: "602",
      volume: "12.4 ETH",
    },
    {
      image: creatorImage,
      name: "Miracle Gouse",
      change: "+1.41%",
      nftSold: "602",
      volume: "12.4 ETH",
    },
    {
      image: creatorImage,
      name: "Miracle Gouse",
      change: "+1.41%",
      nftSold: "602",
      volume: "12.4 ETH",
    },
    {
      image: creatorImage,
      name: "Miracle Gouse",
      change: "+1.41%",
      nftSold: "602",
      volume: "12.4 ETH",
    },
    {
      image: creatorImage,
      name: "Miracle Gouse",
      change: "+1.41%",
      nftSold: "602",
      volume: "12.4 ETH",
    },
    {
      image: creatorImage,
      name: "Miracle Gouse",
      change: "+1.41%",
      nftSold: "602",
      volume: "12.4 ETH",
    },
    {
      image: creatorImage,
      name: "Miracle Gouse",
      change: "+1.41%",
      nftSold: "602",
      volume: "12.4 ETH",
    },
    {
      image: creatorImage,
      name: "Miracle Gouse",
      change: "+1.41%",
      nftSold: "602",
      volume: "12.4 ETH",
    },
  ];
  return (
    <div className="px_page">
      <div className=" flex flex-col px_res md:py-20 py-10 gap-5 max-sm:gap-3">
        <h1 className="font-worksans text-5xl max-md:text-3xl font-semibold leading-[110%]">
          Top Creators
        </h1>
        <p className="font-worksans text-xl max-md:text-base leading-[160%]">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </div>

      <TabFilter tabs={["Today", "This Week", "This Month", "All Time"]} />

      <div className="pl-8 xl:px-14 max-md:px-5 md:px-8 ">
        <CreatorTab />
      </div>
      <div className="px_res max-sm:px-4">
        {creators.map((creator, index) => (
          <CreatorList key={index} creator={creator} index={index} />
        ))}
      </div>
    </div>
  );
};

export default RankingPage;
