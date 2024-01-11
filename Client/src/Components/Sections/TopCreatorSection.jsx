import TopCreatorCard from "../TopCreatorCard";
import creatorImg1 from "../../assets/Images/creators/Asset 12 2-11.png";
const TopCreatorSection = () => {
  const creatorData = [
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
    { image: creatorImg1, creatorName: "Keepitreal", value: "34.53" },
  ];
  return (
    <div className="flex flex-wrap gap-7 justify-center items-center">
      {creatorData.map((creator, index) => (
        <TopCreatorCard
          key={index}
          image={creator.image}
          creatorName={creator.creatorName}
          value={creator.value}
          index={index}
        />
      ))}
    </div>
  );
};

export default TopCreatorSection;
