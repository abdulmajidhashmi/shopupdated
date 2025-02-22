import Header from "./Header.js";
import SimpleSlider from "./Carousel.js";
import MyAccountpage from "./MyAccountpage.js";
import NavigationBar from "./NavigationBar.js";
import NavHeader from "./NavHeader.js";
import MadinaCardlist from "./MadinaCardlist.js";
import ProductDetail from "./ProductDetail.js";
import Component from "./component.js";
import "./NavigationBar.css";
import Notifications from "./Notifications.js";

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";

import ProductCard from "./Card.js";
import Addtocart from "./Addtocart.js";
import Componentaddtocart from "./Componentaddtocart.js";
import Navbar from "./Navbar.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import LoginFinal from "./LoginFinal.js";
import RegisterFinal from "./RegisterFinal.js";
import HomePage from "./backend/admin/HomePage.js";
import Products from "./backend/admin/Products.js";
import ProtectedRoute from "./ProtectedRoute.js";
import Checkout from "./Checkout.js";
import MyOrders from "./MyOrders.js";
import AdminOrders from "./backend/admin/Orders.js";
import PageNotFound from "./PageNotFound.js";
import Footer from "./Footer.js";
// const router = createBrowserRouter([
//     {
//         path: "/hrahim/",
//         element:
//             <>
//                 <Component />
//             </>
//     },
//     {
//         path: "/hrahim/sukkary",
//         element:
//             <>
//                 <Header />
//                 <SimpleSlider />
//                 <NavHeader />
//                 <MadinaCardlist />
//                 <NavigationBar />
//             </>
//     },
//     {
//         path: "/hrahim/product-detail/:id",
//         element:
//             <>
//                 <Header />
//                 <ProductDetail />
//             </>
//     },
//     {
//         path: "/hrahim/my-account",
//         element:
//             <>
//                 <MyAccountpage />
//                 <NavigationBar />
//             </>
//     },
//     {
//         path: "/hrahim/addtocart",
//         element:
//             <>
//                 <Componentaddtocart />
//             </>
//     },

// ])

import { AnimatePresence } from "framer-motion";
import Scrolltotop from "./Scrolltotop.js";
import LoginRegister from "./LoginRegister.js";
import LoginRegisteremail from "./LoginRegisteremail.js";
import Otp from "./Otp.js";
import Name from "./Name.js";
import Card2 from "./Card2.js";
import Card3 from "./Card3.js";
import Anjeer from "./Anjeer.js";
import ProductList from "./CardList.js";
import { useState } from "react";
import Listing from "./list/index.js";

const App = () => {
  const [cart,setcart]=useState([]);

    function addtocartprop(data){
        setcart(data)
    }

  return (
    <>
      <Routes >
        <Route path='/products' element={<><Listing/></>}/>
        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute>
              <>
                <AdminOrders />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/log"
          element={
            // <LoginRegister/>
            <LoginRegisteremail />
          }
        />
        <Route path="/log/otp" element={<Otp />} />
        <Route path="/log/otp/name" element={<Name />} />
        <Route
          path="/anjeer"
          element={
            <>
              <Header />
              <Anjeer />
            </>
          }
        />
         <Route
          path="/dates"
          element={
            <>
              <Header props={cart}/>
              <ProductList cartlength={addtocartprop}/>
            </>
          }
        />
        <Route path='/contact-us' element={<Header/>}/>
        <Route path='/dry-fruit' element={<Header/>}/>
        <Route path="/card2" element={<Card3 />} />
        <Route
          path="/"
          element={
            <>
              <Notifications />
              <Component />
            </>
          }
        />
        <Route
          path="/my-orders"
          element={
            <>
              
              <Header />
              <MyOrders />
              <Footer />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          }
        />

        <Route
          path="/admin/product"
          element={
            <ProtectedRoute>
              <>
                <Products />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <LoginFinal />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <>
                <HomePage />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <RegisterFinal />
            </>
          }
        />
        <Route
          path="/sukkary"
          element={
            <>
              <Notifications />
              <Header />
              {/* <SimpleSlider /> */}
              <NavHeader />
              <MadinaCardlist />
              {/* <NavigationBar /> */}
              <Footer />
            </>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <>
              <Header />
              <ProductDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/my-account"
          element={
            <>
              <MyAccountpage />
              {/* <NavigationBar /> */}
            </>
          }
        />
        <Route
          path="/navbar"
          element={
            <>
              <Navbar />
              {/* <NavigationBar /> */}
            </>
          }
        />
        <Route
          path="/addtocart"
          element={
            <>
              <Componentaddtocart />
            </>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    
    </>
  );
};

export default App;
