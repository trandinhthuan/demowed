import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../Context/CartContext";
const CartItem = ({ item }) => {
  const { removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext);
  const { id, image, name, price, amount } = item;
  const formatPrice = (price) => {
    const f = new Intl.NumberFormat("vi-vn", {
      style: "currency",
      currency: "VND",
    });

    return f.format(price);
  };
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        <Link to={`/sanpham/${id}`}>
          <img
            className="max-w-[80px]"
            src={item?.image?.[0]}
            alt={item?.name}
          />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <div>
              <Link
                to={`/sanpham/${id}`}
                className=" link-class text-sm uppercase font-medium max-w-[240] text-primary underline-none hover:underline"
              >
                {name}
              </Link>
            </div>
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div onClick={()=>decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer h-full">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div onClick={()=>increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            {/* <div className="flex-1 flex items-center justify-around">
              {formatPrice(item?.options?.[0].info?.[0]?.price)}
            </div> */}
            <div className="flex-1 flex justify-end items-center font-medium">
              {formatPrice(
                `${parseFloat(
                  item?.options?.[0].info?.[0]?.price * amount
                ).toFixed(2)}`
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
