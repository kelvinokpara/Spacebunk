const CreatorList = ({ creator = {}, index }) => {
  return (
    <div className="flex justify-around items-center rounded-3xl py-3 md:px-8 px-4 bg-bgGrey1 my-4">
      <div className="flex gap-x-3 items-center">
        <div className="grid place-items-center md:w-8 w-6 md:text-sm text-xs p-1 rounded-full text-textGrey font-semibold bg-bgGrey2 mr-2">
          {index}
        </div>
        <img src={creator.image} alt="" className="w-10 md:w-14" />
        <h6 className="font-worksans sm:text-base text-sm font-semibold capitalize">
          {creator.name}
        </h6>
      </div>
      <p className="font-spacemono text-sm sm:text-base text-green-500 hidden md:inline-flex">
        {creator.change}
      </p>
      <p className="font-spacemono text-sm sm:text-base hidden lg:inline-flex">
        {creator.nftSold}
      </p>
      <p className="font-spacemono text-sm sm:text-base">{creator.volume}</p>
    </div>
  );
};

export default CreatorList;
