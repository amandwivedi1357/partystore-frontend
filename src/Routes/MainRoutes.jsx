import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home";
import { Celebrations } from "../Components/Celebrations";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celebrations" element={<Celebrations />} />
      </Routes>
    </>
  );
};
