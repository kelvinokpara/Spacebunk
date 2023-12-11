import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full box-border max-md:px-10 max-sm:px-[20px]">
      <Navbar />
      <div className="min-h-[90vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
