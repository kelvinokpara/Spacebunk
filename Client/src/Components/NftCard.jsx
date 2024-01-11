const NftCard = ({ image, name, creator, price, highestBid }) => {
  return (
    <div className="w-[300px] max-md:w-[250px] rounded-[20px] overflow-hidden">
      <img src={image} alt="" height={290} width={300} />
      <div className="p-5 flex flex-col items-start gap-6 bg-bgGrey1">
        <div>
          <h5 className="font-worksans text-lg font-semibold capitalize">
            {name}
          </h5>
          <p className="font-spacemono lg:text-base text-sm">{creator}</p>
        </div>
        <div className="flex justify-between items-center w-full">
          {/* price */}
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-textGrey font-spacemono text-xs">Price</span>
            <p className="font-spacemono text-base">{price}</p>
          </div>
          {/* highest bid */}
          <div className="flex flex-col items-end gap-y-2">
            <span className="text-textGrey font-spacemono text-xs">
              Highest Bid
            </span>
            <p className="font-spacemono text-base">{highestBid}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
