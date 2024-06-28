import React from "react";

import { FaWhatsapp, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <FaWhatsapp />
            </div>
            <div className="header_top__icon_wrapper">
              <FaInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <FaXTwitter />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <strong>FREE SHIPPING </strong>
            THIS WEEK FOR ORDERS OVER - $55
          </div>
          <div className="flex gap-4">
            <select
              name="currency"
              id="currency"
              className="text-gray-500 text-[12px] w-[70px]"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="KSH =/">KSH =/</option>
            </select>

            <select
              name="language"
              id="language"
              className="text-gray-500 text-[12px] w-[80px]"
            >
              <option value="English">English</option>
              <option value="French">Swahili</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
