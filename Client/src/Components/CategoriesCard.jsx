const CategoriesCard = ({ image, category }) => {
  return (
    <div className="max-w-[250px] max-sm:w-[130px] max-lg:w-[200px] rounded-[20px] overflow-hidden">
      <img
        src={image}
        alt=""
        className="w-full hover:scale-110 relative z-0 transition-all duration-300"
      />
      <div className="lg:py-5 max-lg:py-3 grid place-items-center bg-bgGrey1 relative z-10">
        <h5 className="font-worksans lg:text-lg text-base max-md:text-sm font-semibold">
          {category}
        </h5>
      </div>
    </div>
  );
};

export default CategoriesCard;
