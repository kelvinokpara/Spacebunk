const WorksCard = ({ image, head, sub }) => {
  return (
    <div className="flex md:flex-col md:p-7 p-5  gap-5 justify-center items-center max-w-[330px] md:h-[430px] bg-bgGrey1 rounded-[20px]">
      <img src={image} alt="" className="max-md:w-24" />
      <div className="flex flex-col gap-y-3 max-md:items-start items-center">
        <h5 className="font-worksans md:text-lg text-base font-semibold md:text-center ">
          {head}
        </h5>
        <p className="font-worksans md:text-sm text-xs md:text-center">{sub}</p>
      </div>
    </div>
  );
};

export default WorksCard;
