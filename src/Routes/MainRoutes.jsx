import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home";
import { Celebrations } from "../Components/Celebrations";
import { Festivals } from "../Components/Festivals";
import { Products } from "../Components/Products";
import { PartyStoreCategory } from "../Components/PartyStoreCategory";
import { Birthdays } from "../Components/Birthdays";
import { SingleProduct } from "../Components/SingleProduct.jsx";
import { FestivalSingleProduct } from "../Components/FestivalSingleProduct.jsx";
import { BirthdaySingleProduct } from "../Components/BirthdaySingleProduct.jsx";
import { CelebrationPackages } from "../Components/CelebrationPackages";
import { FestivalPackages } from "../Components/FestivalPackages";
import { BirthdayPackages } from "../Components/BirthdayPackages";
import { Cart } from "../Components/Cart.jsx";
import { Wishlist } from "../Components/Wishlist.jsx";
import { Checkout } from "../Components/Checkout.jsx";
import { Register } from "../Components/Register.jsx";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/celebrations" element={<Celebrations />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route
          path="/celebrations/:category"
          element={<CelebrationPackages />}
        />
        <Route path="/festivals/:category" element={<FestivalPackages />} />
        <Route
          path="/festivals/:category/:id"
          element={<FestivalSingleProduct />}
        />
        <Route
          path="/birthday/:theme/:category"
          element={<BirthdayPackages />}
        />
        <Route path="/celebrations/:category/:id" element={<SingleProduct />} />
        <Route
          path="/birthday/:theme/:category/:id"
          element={<BirthdaySingleProduct />}
        />
        <Route path="/birthday/:theme" element={<Birthdays />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<PartyStoreCategory />} />
      </Routes>
    </>
  );
};
