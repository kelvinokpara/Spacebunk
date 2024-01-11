import NftCard from "../NftCard";
import nftImg from "../../assets/Images/NFT_img/Image-1.png";

const DiscoverNftSection = () => {
  const Nfts = [
    {
      image: nftImg,
      name: "Distant Galaxy",
      creator: "MoonDancer",
      price: "1.63",
      highestBid: "0.33",
    },
    {
      image: nftImg,
      name: "Distant Galaxy",
      creator: "MoonDancer",
      price: "1.63",
      highestBid: "0.33",
    },
    {
      image: nftImg,
      name: "Distant Galaxy",
      creator: "MoonDancer",
      price: "1.63",
      highestBid: "0.33",
    },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-7">
      {Nfts.map((nft, index) => (
        <NftCard
          key={index}
          image={nft.image}
          name={nft.name}
          creator={nft.creator}
          price={nft.price}
          highestBid={nft.highestBid}
        />
      ))}
    </div>
  );
};

export default DiscoverNftSection;
