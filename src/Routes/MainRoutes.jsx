import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home";
import { Celebrations } from "../Components/Celebrations";
import { SingleProduct } from "../Components/SingleProduct";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celebrations" element={<Celebrations />} />
        <Route path="/SingleProduct" element={<SingleProduct />} />
      </Routes>
    </>
  );
};
