import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <div className="navbar__link relative cursor-pointer">HOME</div>
          <div className="navbar__link relative cursor-pointer">CATEGORIES</div>
          <div className="navbar__link relative cursor-pointer">LAPTOPS</div>
          <div className="navbar__link relative cursor-pointer">ABOUT</div>
          <div className="navbar__link relative cursor-pointer">HOT OFFERS</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
