import React from "react";
import { useState } from "react";
import { ShoppingCart } from "@mui/icons-material";

const Cart = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    document.getElementById("cartBar").style.width = `200px`;
  };

  const toggleClose = () => {
    document.getElementById("cartBar").style.width = `0px`;
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
    if (!isOpen) {
      toggleOpen();
    } else {
      toggleClose();
    }
  };
  return (
    <div className="cartWrapper">
      <div className="stickyHeader prevent-select">
        <button className="cartBtn" onClick={toggleMenu}>
          Cart
          <ShoppingCart />
        </button>
        <div className="itemCount">
          <svg></svg>
          <p className="itemCountp">
            <span></span>
          </p>
        </div>
      </div>
      <section id="cartBar">what is in here</section>
    </div>
  );
};

export default Cart;
