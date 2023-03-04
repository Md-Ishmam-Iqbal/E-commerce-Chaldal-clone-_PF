import React from "react";
import { ShoppingCart } from "@mui/icons-material";

const Cart = () => {
  return (
    <section className="stickyHeader prevent-select">
      Cart
      <ShoppingCart />
      <div className="itemCount">
        <svg></svg>
        <p className="itemCountp">
          <span></span>
        </p>
      </div>
    </section>
  );
};

export default Cart;
