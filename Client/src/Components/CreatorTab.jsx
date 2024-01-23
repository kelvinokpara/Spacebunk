const CreatorTab = () => {
  return (
    <div className="flex justify-around items-center rounded-3xl py-3 md:px-8 px-4 border border-bgGrey1 my-4">
      <p className="font-spacemono text-base text-textGrey lg:pr-32">
        # Artists
      </p>

      <p className="font-spacemono text-base text-textGrey hidden md:inline-flex">
        Change
      </p>
      <p className="font-spacemono text-base text-textGrey hidden lg:inline-flex">
        NFTs Sold
      </p>
      <p className="font-spacemono text-base text-textGrey">Volume</p>
    </div>
  );
};

export default CreatorTab;
