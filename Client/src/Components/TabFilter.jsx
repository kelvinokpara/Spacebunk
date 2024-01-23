const TabFilter = ({ tabs = [] }) => {
  return (
    <div className="">
      <div className=" py-2 px-3">
        <nav className="flex md:justify-between  max-md:justify-center md:gap-x-6 items-center max-sm:overflow-x-auto">
          {tabs &&
            tabs.map((tab, index) => (
              <a
                href="#"
                className="inline-flex whitespace-nowrap border-b-2 border-transparent py-3 px-8 max-sm:px-3 lg:text-xl max-md:text-sm font-semibold text-textGrey transition-all duration-200 ease-in-out hover:border-b-accent hover:text-accent focus:border-b-accent focus:text-accent"
                key={index}
              >
                {" "}
                {tab}{" "}
              </a>
            ))}
        </nav>
      </div>
    </div>
  );
};

export default TabFilter;
