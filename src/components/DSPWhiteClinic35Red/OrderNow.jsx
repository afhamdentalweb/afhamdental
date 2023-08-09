import React from "react";

const OrderNow = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-mygreen-500 bg-green-pattern bg-cover bg-center drop-shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
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
