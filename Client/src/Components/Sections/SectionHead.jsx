import Button from "../Button";

const SectionHead = ({ head, sub, btn = {}, children }) => {
  return (
    <div className="flex flex-col gap-y-10 px_res">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h3 className="font-worksans font-semibold ">{head}</h3>
          <p className="font-worksans max-sm:text-sm text-base font-normal">
            {sub}
          </p>
        </div>
        <div className="max-sm:hidden flex">
          {btn ? (
            <Button btnFill={btn.btnFill} rounded={btn.rounded} icon={btn.icon}>
              {btn.children}
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
      {children}
      <div className="max-sm:flex hidden justify-center items-center">
        <Button btnFill={btn.btnFill} rounded={btn.rounded} icon={btn.icon}>
          {btn.children}
        </Button>
      </div>
    </div>
  );
};

export default SectionHead;
