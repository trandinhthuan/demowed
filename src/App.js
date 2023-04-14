import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/header/Header";
import RunningText from "./components/header/RunningText";
import Footer from "./components/Footer/Footer";
import AllProducts from "./components/ShowProducts/AllProducts/AllProducts";
import ProductsManage from "./components/AdminPanel/ProductsManage";
import ProductDetails from "./components/ShowProducts/Details/ProductDetails";
import CheckItem from "./components/CheckItem/CheckItem";
import CareItems from "./components/CareItems/CareItems";
import SidebarProvider from "./components/Context/SidebarContext";
import Sidebar from "./components/ShowProducts/Slidebar/Sidebar";
import Iphone14New from "./components/Home/iphone14/iphone14";
import Payment from "../../project/src/components/Payment/Payment"
import Shipping from "../../../DemoWebMobile/project/src/components/Payment/Shipping"
const App = () => {
  const [products, setProducts] = useState([]);
  const [checkItems, setCheckItems] = useState([]);
  const [careItems, setCareItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetch("https://63f488d42213ed989c44ccc5.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => setProductsData(data))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch("https://63f3daa4864fb1d6001eedae.mockapi.io/api/products", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((it) => {
        setProducts(it);
        console.log(it);
      });
  }, []);
  const handleSelectLove = (id) => {
    setCareItems((prev) => [...prev, products[id]]);
    console.log(careItems);
  };
  const handleSelectCheck = (id) => {
    setCheckItems((prev) => [...prev, products[id]]);
    console.log(checkItems);
  };
  return (
    <SidebarProvider>
      <RunningText />
      <Header careItems={careItems} checkItems={checkItems} />
      <hr />
      <Routes>
        <Route
          path="/sanpham"
          element={
            <AllProducts
              productsData={productsData}
              setProductsData={setProductsData}
            />
          }
        />
        <Route path="/sanpham/:id" element={<ProductDetails />} />
        <Route
          path="/checkitems"
          element={
            <CheckItem checkItems={checkItems} setCheckItems={setCheckItems} />
          }
        />
        <Route
          path="/careitems"
          element={
            <CareItems careItems={careItems} setCareItems={setCareItems} />
          }
        />
        <Route
          path="/cart"
          element={
            <CareItems cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/manage"
          element={
            <ProductsManage productsData={productsData} setProductsData={setProductsData} />
          }
        />
        {/* <Route
        path ="/thanhtoan" element={<Payment/>}/> */}
        <Route
          path="/"
          element={
            <Home
              products={products}
              handleSelectCheck={handleSelectCheck}
              handleSelectLove={handleSelectLove}
              checkItems={checkItems}
              setCareItems={setCareItems}
              setProducts={setProducts}
              setCheckItems={setCheckItems}
              careItems={careItems}
            />
          }
        />
        <Route path="/iphone14new" element={<Iphone14New />} />
      </Routes>
      <Footer />
      <Sidebar />
    </SidebarProvider>
  );
};

export default App;
