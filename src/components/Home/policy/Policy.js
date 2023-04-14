import React from "react";
import "./Policy.css";

function Policy() {
  return (
    <ul className="list " >
      <li className="list-policy">
        <i className="fa-solid fa-truck-fast fa-icon"></i>
        <div className="ship-info">
          SHIP SIÊU TỐC - 2H <br />
          <p className="text-sm">Miễn phí - An Toàn</p>
        </div>
      </li>
      <li className="list-policy">
        <i className="fa-solid fa-phone fa-icon "></i>
        <div className="ship-info">
          TƯ VẤN MIỄN PHÍ <br />
          <p className="text-sm"> Từ 7h-24h: 1900.63.60.99</p>
        </div>
      </li>{" "}
      <li className="list-policy">
        <i className="  fa-solid fa-rotate-left fa-icon"></i>
        <div className="ship-info">
          HOÀN TRẢ MIỄN PHÍ <br />
          <p className="text-sm"> Lên đến 45 ngày</p>
        </div>
      </li>{" "}
      <li className="list-policy">
        <i class="fa-solid fa-credit-card fa-icon"></i>
        <div className="ship-info">
          MIỄN PHÍ CÀ THẺ <br />
          <p className="text-sm"> Visa Master ATM</p>
        </div>
      </li>{" "}
      <li className="list-policy ">
        <i class="fa-solid fa-percent fa-icon "></i>
        <div className="ship-info">
          TRẢ GÓP 0% LÃI SUẤT
          <br />
          <p className="text-sm"> Online - Tận nhà</p>
        </div>
      </li>
    </ul>
  );
}

export default Policy;
