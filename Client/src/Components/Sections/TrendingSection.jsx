import TrendingCollections from "../TrendingCollections";
import img1_1 from "../../assets/Images/trending_section/Primary Photo Placeholder.png";
import img1_2 from "../../assets/Images/trending_section/Secondary Photo Placeholder.png";
import img1_3 from "../../assets/Images/trending_section/Secondary Photo Placeholder-1.png";
import creatorImg_1 from "../../assets/Images/creators/Asset 12 2-11.png";
//
import img2_1 from "../../assets/Images/trending_section/Primary Photo Placeholder-1.png";
import img2_2 from "../../assets/Images/trending_section/Secondary Photo Placeholder-2.png";
import img2_3 from "../../assets/Images/trending_section/Secondary Photo Placeholder-3.png";
import creatorImg_2 from "../../assets/Images/creators/Asset 12 2-13.png";
//
import img3_1 from "../../assets/Images/trending_section/Primary Photo Placeholder-2.png";
import img3_2 from "../../assets/Images/trending_section/Secondary Photo Placeholder-3.png";
import img3_3 from "../../assets/Images/trending_section/Secondary Photo Placeholder-4.png";
import creatorImg_3 from "../../assets/Images/creators/Asset 12 2-17.png";

const TrendingSection = () => {
  const trendingTabs = [
    {
      img1: img1_1,
      img2: img1_2,
      img3: img1_3,
      value: "128k",
      creatorImg: creatorImg_1,
    },
    {
      img1: img2_1,
      img2: img2_2,
      img3: img2_3,
      value: "232k",
      creatorImg: creatorImg_2,
    },
    {
      img1: img3_1,
      img2: img3_2,
      img3: img3_3,
      value: "440k",
      creatorImg: creatorImg_3,
    },
  ];
  return (
    <div className="flex flex-none gap-8 px_res justify-between items-center overflow-x-auto snap-x snap-mandatory">
      {trendingTabs.map((tab, index) => (
        <TrendingCollections
          img1={tab.img1}
          img2={tab.img2}
          img3={tab.img3}
          value={tab.value}
          creatorImg={tab.creatorImg}
          key={index}
        />
      ))}
    </div>
  );
};

export default TrendingSection;
