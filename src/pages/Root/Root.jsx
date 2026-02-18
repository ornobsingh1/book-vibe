import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
