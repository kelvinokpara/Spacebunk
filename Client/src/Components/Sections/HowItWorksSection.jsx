import WorksCard from "../WorksCard";
import worksImg1 from "../../assets/Images/how_it_works_section/Icon.png";
import worksImg2 from "../../assets/Images/how_it_works_section/Icon-1.png";
import worksImg3 from "../../assets/Images/how_it_works_section/Icon-2.png";

const HowItWorksSection = () => {
  const works = [
    {
      image: worksImg1,
      head: "Setup Your Wallet",
      sub: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      image: worksImg2,
      head: "Create Collection",
      sub: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      image: worksImg3,
      head: "Start Earning",
      sub: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <div className="flex gap-7 max-md:flex-col justify-center items-center">
      {works.map((work, index) => (
        <WorksCard
          key={index}
          image={work.image}
          head={work.head}
          sub={work.sub}
        />
      ))}
    </div>
  );
};

export default HowItWorksSection;
