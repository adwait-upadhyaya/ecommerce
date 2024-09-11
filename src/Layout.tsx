import { useState } from "react";
import Banner from "./molecules/Banner";
import Navbar from "./molecules/Navbar";
import { Outlet } from "react-router-dom";
import Subnavbar from "./molecules/Subnavbar";
import Footer from "./layout/Footer";
import Cart from "./layout/Cart";

const Layout = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  const closeCart = () => {
    setIsCartVisible(false);
  };

  return (
    <>
      <Banner />
      <Navbar onCartClick={toggleCartVisibility} />
      <Subnavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <div
        className={isCartVisible ? "cart open" : "cart"}
        style={{ position: "absolute" }}
      >
        <Cart closeCart={closeCart} />
      </div>
    </>
  );
};

export default Layout;
