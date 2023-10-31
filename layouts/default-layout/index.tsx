import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import Whatsapp from "@/components/Common/Whatsapp";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Whatsapp />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
