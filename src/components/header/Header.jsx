import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {AiOutlineSetting} from 'react-icons/ai'
import HeaderMenu from "./HeaderMenu";
import { SidebarContext } from "../Context/SidebarContext";
import { CartContext } from "../Context/CartContext";
const Header = (props) => {
  const { careItems, checkItems } = props;
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let prevScrollPosition = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsHeaderVisible(
        currentScrollPosition < 200 ||
          currentScrollPosition <= prevScrollPosition
      );
      prevScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className= "bg-white w-full z-20 transition-all duration-300 "
    >
      <nav>
        <div className="header-title">
          <Link to="/">
            {" "}
            <img src="http://surl.li/etcty" alt="This is logo" />
          </Link>
          <ul>
            <li>Hotline: xxxxx</li>
            <li>
              <i>
                Miễn Phí Vận Chuyển Đơn Hàng Trên <b>1.000.000đ</b>
              </i>
            </li>
            <li>
              <a href="#">Đăng Nhập</a>/ <a href="#"> Đăng Kí</a>
            </li>
            {/* <li>
              <Link to="/careitems">
                <i class="fa-regular fa-heart">{careItems.length}</i>
              </Link>
            </li> */}
            {/* <li>
              <Link to="/checkitems">
                <i class="fa-solid fa-code-compare">{checkItems.length}</i>
              </Link>
            </li> */}
            <li>
              <Link to="/manage">
                <i class="fa-solid"><AiOutlineSetting/></i>
              </Link>
            </li>

            <li>
              <Link
                className="cursor-pointer flex relative max-w-[100px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div>
                  <i class="fa-solid fa-cart-shopping"></i>Giỏ hàng
                </div>
                <div className="bg-red-500 absolute left-3 -top-3 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                  {itemAmount}
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <HeaderMenu />
      </nav>
    </header>
  );
};

export default Header;
