import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home";
import { Celebrations } from "../Components/Celebrations";
import { SingleProduct } from "../Components/SingleProduct.jsx";
import { CelebrationPackages } from "../Components/CelebrationPackages";

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
      </Routes>
    </>
  );
};
