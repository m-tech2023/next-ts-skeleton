import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
