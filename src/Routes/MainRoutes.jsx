import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home";
import { Celebrations } from "../Components/Celebrations";
import { SingleProduct } from "../Components/SingleProduct.jsx";
import { CelebrationPackages } from "../Components/CelebrationPackages";
import { Cart } from "../Components/Cart.jsx";
import { Wishlist } from "../Components/Wishlist.jsx";
import { Checkout } from "../Components/Checkout.jsx";
import { Login } from "../Components/Login.jsx";
import { Signup } from "../Components/Signup.jsx";
import { Register } from "../Components/Register.jsx";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celebrations" element={<Celebrations />} />
        <Route
          path="/celebrations/:category"
          element={<CelebrationPackages />}
        />
        <Route path="/celebrations/:category/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
