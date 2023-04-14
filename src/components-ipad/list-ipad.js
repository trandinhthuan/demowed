import React from "react";
import { useState } from "react";
import { ProductsData } from "../data/ProductsData";
import "./list-ipad.css";

const formatPrice = (price) => {
  const f = new Intl.NumberFormat("vi-vn", {
    style: "currency",
    currency: "VND",
  });

  return f.format(price);
};

function MenuItems({ menuValue }) {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
    menuValue(item);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-xl font-bold">Apple chính hãng</h2>
          <div className="flex text-xl">
            <button
              className={`mx-2 px-4 py-2 rounded-md border text-sm hover:text-yellow-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                activeItem === "ipad" ? "text-gray-700 bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("ipad")}
              style={{ borderRadius: "20px" }}
            >
              Ipad
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md border text-sm hover:text-yellow-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                activeItem === "iphone" ? "text-gray-700 bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("iphone")}
              style={{ borderRadius: "20px" }}
            >
              Iphone
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md border text-sm hover:text-yellow-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                activeItem === "macbook" ? "text-gray-700 bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("macbook")}
              style={{ borderRadius: "20px" }}
            >
              Macbook
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md border text-sm hover:text-yellow-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                activeItem === "phukien" ? "text-gray-700 bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick("phukien")}
              style={{ borderRadius: "20px" }}
            >
              Phụ kiện
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function ListIpad(props) {
  return (
    <div className="listIpad-container w-[265px] h-[450px] border-solid border-[1px] rounded-[20px] text-center ml-[10px] p-[5px] shadow-xl hover:shadow-gray-500">
      <div className="text-center h-[265px] w-[265px]">
        <img
          className="img1 w-auto h-[210px] m-auto "
          src={props.image[0]}
          alt=""
        />
        <img
          className="img2 w-auto h-[210px] m-auto hidden"
          src={props.image[1]}
          alt=""
        />
      </div>
      <div className="flex justify-center ">
        {props.image.map((img, index) => {
          return <img className="h-[60px] w-[60px]" src={img} alt="" />;
        })}
      </div>
      <div className="text-left ">
        <h5 className="text-lg">{props.name}</h5>
      </div>
      <div className="flex mt-[30px]">
        <p>{formatPrice(props.price || 0)}</p>
        <p className="ml-[15px] line-through">
          {formatPrice(props.price * 0.2 || 0)}
        </p>
      </div>
    </div>
  );
}

const dataIpad = ProductsData.filter((a) => a.type === "Ipad");

function ListIpads() {
  return (
    <div className="flex justify-center gap-[1px]">
      {dataIpad.map((item, index) => {
        return (
          <ListIpad
            key={index}
            id={item.id}
            type={item.type}
            name={item.name}
            serial={item.serial}
            brand={item.brand}
            color={item.color}
            image={item.image}
            price={item.options?.[0]?.info?.[0]?.price}
          />
        );
      })}
    </div>
  );
}
function ListAccessory(props) {
  return (
    <div className="listAccessory-container w-[265px] h-[450px] border-solid border-[1px] rounded-[20px] text-center ml-[10px] p-[5px] shadow-xl hover:shadow-gray-500">
      <div className="text-center h-[265px] w-[265px]">
        <img
          className="img1 w-auto h-[210px] m-auto "
          src={props.image[0]}
          alt=""
        />
        <img
          className="img2 w-auto h-[210px] m-auto hidden"
          src={props.image[1]}
          alt=""
        />
      </div>
      <div className="flex justify-center ">
        {props.image.map((img, index) => {
          return <img className="h-[60px] w-[60px]" src={img} alt="" />;
        })}
      </div>
      <div className="text-left ">
        <h5 className="text-lg">{props.name}</h5>
      </div>
      <div className="flex mt-[30px]">
        <p>{formatPrice(props.price || 0)}</p>
        <p className="ml-[15px] line-through">
          {formatPrice(props.price * 0.2 || 0)}
        </p>
      </div>
    </div>
  );
}

const dataAccessory = ProductsData.filter((a) => a.type === "SDP");

function ListAccessories() {
  return (
    <div className="flex justify-center gap-[1px]">
      {dataAccessory.map((item, index) => {
        return (
          <ListAccessory
            key={index}
            id={item.id}
            type={item.type}
            name={item.name}
            serial={item.serial}
            brand={item.brand}
            color={item.color}
            image={item.image}
            price={item.options?.[0]?.info?.[0]?.price}
          />
        );
      })}
    </div>
  );
}
function ListiPhone(props) {
  return (
    <div className="listIphone-container w-[265px] h-[450px] border-solid border-[1px] rounded-[20px] text-center ml-[10px] p-[5px] shadow-xl hover:shadow-gray-500">
      <div className="text-center h-[265px] w-[265px]">
        <img
          className="img1 w-auto h-[210px] m-auto "
          src={props.image[0]}
          alt=""
        />
        <img
          className="img2 w-auto h-[210px] m-auto hidden"
          src={props.image[1]}
          alt=""
        />
      </div>
      <div className="flex justify-center ">
        {props.image.map((img, index) => {
          return <img className="h-[60px] w-[60px]" src={img} alt="" />;
        })}
      </div>
      <div className="text-left ">
        <h5 className="text-lg">{props.name}</h5>
      </div>
      <div className="flex mt-[30px]">
        <p>{formatPrice(props.price || 0)}</p>
        <p className="ml-[15px] line-through">
          {formatPrice(props.price * 0.2 || 0)}
        </p>
      </div>
    </div>
  );
}

const dataiPhone = ProductsData.filter((a) => a.type === "Iphone");

function ListiPhones() {
  return (
    <div className="flex justify-center gap-[1px]">
      {dataiPhone.map((item, index) => {
        // console.log("item", item);
        return (
          <ListiPhone
            key={index}
            id={item.id}
            type={item.type}
            name={item.name}
            serial={item.serial}
            brand={item.brand}
            color={item.color}
            image={item.image}
            price={item.options?.[0]?.info?.[0]?.price}
          />
        );
      })}
    </div>
  );
}
function ListMacBook(props) {
  return (
    <div className="listMacBook-container w-[265px] h-[450px] border-solid border-[1px] rounded-[20px] text-center ml-[10px] p-[5px] shadow-xl hover:shadow-gray-500">
      <div className="text-center h-[265px] w-[265px]">
        <img
          className="img1 w-auto h-[210px] m-auto "
          src={props.image[0]}
          alt=""
        />
        <img
          className="img2 w-auto h-[210px] m-auto hidden"
          src={props.image[1]}
          alt=""
        />
      </div>
      <div className="flex justify-center ">
        {props.image.map((img, index) => {
          return <img className="h-[60px] w-[60px]" src={img} alt="" />;
        })}
      </div>
      <div className="text-left ">
        <h5 className="text-lg">{props.name}</h5>
      </div>
      <div className="flex mt-[30px]">
        <p>{formatPrice(props.price || 0)}</p>
        <p className="ml-[15px] line-through">
          {formatPrice(props.price * 0.2 || 0)}
        </p>
      </div>
    </div>
  );
}

const dataMacBook = ProductsData.filter((a) => a.type === "Macbook");

function ListMacBooks() {
  return (
    <div className="flex justify-center gap-[1px]">
      {dataMacBook.map((item, index) => {
        return (
          <ListMacBook
            key={index}
            id={item.id}
            type={item.type}
            name={item.name}
            serial={item.serial}
            brand={item.brand}
            color={item.color}
            image={item.image}
            price={item.options?.[0]?.info?.[0]?.price}
          />
        );
      })}
    </div>
  );
}

function ListItems() {
  const [clickk, setclickk] = useState("ipad");

  return (
    <div>
      <MenuItems menuValue={setclickk} />
      {clickk === "ipad" && <ListIpads valueItem={clickk} />}
      {clickk === "macbook" && <ListMacBooks valueItem={clickk} />}
      {clickk === "phukien" && <ListAccessories valueItem={clickk} />}
      {clickk === "iphone" && <ListiPhones valueItem={clickk} />}
    </div>
  );
}
export default ListItems;
