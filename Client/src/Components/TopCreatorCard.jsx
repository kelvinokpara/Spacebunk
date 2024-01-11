const TopCreatorCard = ({ index, image, creatorName, value }) => {
  return (
    <div className="min-lg:max-w-240px rounded-[20px] relative bg-bgGrey1 p-5 flex lg:flex-col items-center gap-5">
      <div className="grid place-items-center w-8 text-sm p-1 rounded-full text-textGrey font-semibold bg-bgGrey2 absolute lg:top-5 lg:left-5 top-3 left-3">
        {index}
      </div>
      <div>
        <img src={image} alt="" className="w-[60px] lg:w-[120px]" />
      </div>
      {/*  */}
      <div className="flex lg:items-center flex-col">
        <h6 className="font-worksans lg:text-xl text-lg font-semibold capitalize">
          {creatorName}
        </h6>
        <p className="text-textGrey font-worksans lg:text-base text-sm">
          Total Sales:{" "}
          <span className="text-white font-spacemono max-md:text-xs">
            {value} ETH
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopCreatorCard;
