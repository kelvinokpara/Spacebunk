import CategoriesCard from "../CategoriesCard";
// category images
import catImg1 from "../../assets/Images/category_section/Category Icon.png";
import catImg2 from "../../assets/Images/category_section/Photo & Icon.png";
import catImg3 from "../../assets/Images/category_section/Photo & Icon-1.png";
import catImg4 from "../../assets/Images/category_section/Photo & Icon-2.png";
import catImg5 from "../../assets/Images/category_section/Photo & Icon-3.png";
import catImg6 from "../../assets/Images/category_section/Photo & Icon-4.png";
import catImg7 from "../../assets/Images/category_section/Photo & Icon-5.png";
import catImg8 from "../../assets/Images/category_section/Photo & Icon-6.png";

const CategoriesSection = () => {
  const categories = [
    { image: catImg1, category: "Art" },
    { image: catImg2, category: "Collectibles" },
    { image: catImg3, category: "Music" },
    { image: catImg4, category: "Photography" },
    { image: catImg5, category: "Video" },
    { image: catImg6, category: "Utility" },
    { image: catImg7, category: "Sports" },
    { image: catImg8, category: "Virtual Worlds" },
  ];
  return (
    <div className="flex gap-5 flex-wrap justify-center items-center">
      {categories.map((category, index) => (
        <CategoriesCard
          key={index}
          image={category.image}
          category={category.category}
        />
      ))}
    </div>
  );
};

export default CategoriesSection;
