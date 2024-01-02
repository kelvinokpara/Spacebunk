const TrendingCollections = ({
  img1,
  img2,
  img3,
  value,
  collectionName,
  creatorImg,
  creatorName,
}) => {
  return (
    <div className="max-md:inline-block flex flex-col gap-3 lg:flex-wrap flex-shrink-0 max-sm:w-[280px] snap-center">
      <div>
        <img src={img1} alt="" />
      </div>
      <div className="flex gap-x-3 max-md:mt-3 items-center justify-center">
        <img src={img2} width={100} height={100} alt="" />
        <img src={img3} width={100} height={100} alt="" />{" "}
        <div className="h-[100px] w-[100px] bg-accent grid place-items-center rounded-xl">
          <p className=" text-white font-spacemono text-xl font-bold">
            {value}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 max-md:mt-3 ">
        <p className="font-worksans text-xl font-semibold capitalize">
          {collectionName ?? "collection name"}
        </p>
        <div className="flex items-center gap-x-3">
          <img src={creatorImg} alt="" width={25} height={25} />{" "}
          <span className="font-worksans text-base">
            {creatorName ?? "creator name"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrendingCollections;
