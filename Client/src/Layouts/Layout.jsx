import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-full box-border">
      <div className="px_page">
        <Navbar />
      </div>
      <div className="min-h-[90vh] box-border">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
