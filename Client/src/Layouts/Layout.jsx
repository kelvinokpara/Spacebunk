import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[90vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
