import React from "react";

const OrderNow = () => {
  return (
    <div className="bg-mygreen-500 bg-green-pattern bg-cover bg-center">
      <div className="container mx-auto px-5 py-5">
        <a
          href="#order-form"
          className="flex items-center bg-myorange-500 text-white px-5 py-3 rounded-md w-fit mx-auto"
        >
          <img src="img/cart-icon.svg" alt="Cart icon" className="w-6 mr-2" />
          Pesan Sekarang
        </a>
      </div>
    </div>
  );
};

export default OrderNow;
