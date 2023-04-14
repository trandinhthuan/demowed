import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import "./AllProducts.css";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { ProductsData } from "../../../data/ProductsData";
import { CartContext } from "../../Context/CartContext";
const AllProducts = (props) => {
  const {productsData, setProductsData} = props;
  const { addToCart } = useContext(CartContext);
  const [selectedOptions, setSelectedOptions] = useState({
    type: [],
    brand: [],
    color: [],
  });
  

  const formatPrice = (price) => {
    const f = new Intl.NumberFormat("vi-vn", {
      style: "currency",
      currency: "VND",
    });

    return f.format(price);
  };

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: checked
        ? [...prevState[name], value]
        : prevState[name].filter((item) => item !== value),
    }));
  };

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      color: checked
        ? [...prevState.color, value]
        : prevState.color.filter((item) => item !== value),
    }));
  };

  const filteredProducts = productsData.filter((product) => {
    const { type, brand, color } = selectedOptions;
    // console.log({
    //   color,
    //   a: product.color,
    // });
    return (
      (type.length === 0 || type.includes(product.type)) &&
      (brand.length === 0 || brand.includes(product.brand)) &&
      (color.length === 0 || product.color?.some((c) => color.includes(c)))
    );
  });

  const colors = Array.from(
    new Set(productsData.flatMap((p) => (p.color ? p.color : [])))
  );
  return (
    <div className="all-product-list ">
      <div className="all-filter">
        <h1>Danh sách </h1>
        <div>
          <h2>Thể Loại</h2>
          <input
            type="checkbox"
            name="type"
            value="Macbook"
            onChange={handleCheckboxChange}
          />
          Macbook
          <br />
          <input
            type="checkbox"
            name="type"
            value="Iphone"
            onChange={handleCheckboxChange}
          />
          iPhone
          <br />
          <input
            type="checkbox"
            name="type"
            value="Ipad"
            onChange={handleCheckboxChange}
          />
          iPad
          <br />
          <input
            type="checkbox"
            name="type"
            value="SDP"
            onChange={handleCheckboxChange}
          />
          Phụ Kiện
        </div>
        <div>
          <h2>Thương Hiệu</h2>
          <input
            type="checkbox"
            name="brand"
            value="Apple"
            onChange={handleCheckboxChange}
          />
          Apple
        </div>
        <div>
          <h2>Màu Sắc</h2>
          {colors.map((color) => (
            <div key={color}>
              <input
                type="checkbox"
                name="color"
                value={color}
                onChange={handleColorChange}
              />
              {color}
            </div>
          ))}
        </div>
        {/* <Sort /> */}
      </div>
      <div className="all-product-display">
        <ul>
          {filteredProducts.map((product, index) => (
            <li
              className="border border-[#e4e4e4] h-[250px]  mb-4 relative overflow-hidden group transition"
              key={product?.id || index}
            >
              <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 group-hover:opacity-100 transition-all duration-300 ">
                <button onClick={() => addToCart(product, product.id)}>
                  <div className="flex justify-center items-center text-white w-12 -h12 bg-red-500">
                    <BsPlus className="text-3xl" />
                  </div>
                </button>
                <Link
                  to={`/sanpham/${index}`}
                  className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                >
                  <BsEyeFill />
                </Link>
              </div>
              <Link to={`/sanpham/${index}`}>
                <img src={product?.image?.[0]} alt={product?.name} />
              </Link>
              <h3 className="all-hover-name-product ">{product?.name}</h3>
              <p className="">
                {formatPrice(product?.options?.[0].info?.[0]?.price)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AllProducts;
