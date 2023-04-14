import { useState } from "react";
import React from "react";
function MenuItems() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
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

export default MenuItems;
