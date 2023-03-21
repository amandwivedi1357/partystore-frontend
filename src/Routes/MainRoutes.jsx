import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home";
import { Celebrations } from "../Components/Celebrations";
import { SingleProduct } from "../Components/SingleProduct.jsx";
import { CelebrationPackages } from "../Components/CelebrationPackages";
import { Cart } from "../Components/Cart.jsx";

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
      </Routes>
    </>
  );
};
