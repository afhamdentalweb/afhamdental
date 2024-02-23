import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto px-5 md:flex md:flex-column md:items-center md:py-0">
      <ul className="mt-8 space-y-2 md:mt-0 md:mb-20 md:w-7/12 lg:w-6/12 lg:space-y-5">
        <li className="flex text-xl font-semibold text-mygreen-500 md:text-2xl lg:text-2xl">
          <img
            src="img/star.svg"
            alt="icon bintang"
            className="h-6 align-baseline mr-3 md:h-7 lg:h-8"
            onContextMenu={(event) => event.preventDefault()}
          />
          BAHAN BLEACHING DENGAN ISI YANG SUPER BANYAK
        </li>
        <li className="flex text-xl font-semibold text-mygreen-500 md:text-2xl lg:text-2xl">
          <img
            src="img/star.svg"
            alt="icon bintang"
            className="h-6 align-baseline mr-3 md:h-7 lg:h-8"
            onContextMenu={(event) => event.preventDefault()}
          />
          BISA DIGUNAKAN HINGGA 5 PASIEN
        </li>
        <li className="flex text-xl font-semibold text-mygreen-500 md:text-2xl lg:text-2xl">
          <img
            src="img/star.svg"
            alt="icon bintang"
            className="h-6 align-baseline mr-3 md:h-7 lg:h-8"
            onContextMenu={(event) => event.preventDefault()}
          />
          BISA TANPA SINAR!!
        </li>
        <li className="flex text-xl font-semibold text-mygreen-500 md:text-2xl lg:text-2xl">
          <img
            src="img/star.svg"
            alt="icon bintang"
            className="h-6 align-baseline mr-3 md:h-7 lg:h-8"
            onContextMenu={(event) => event.preventDefault()}
          />
          COCOK KALAU MAU PASIEN BLEACHINGNYA RAME KARENA JIKA MENGGUNAKAN
          BLEACHING INI BISA BIKIN PROMO COSTNYA TERJANGKAU
        </li>
        <li className="flex text-xl font-semibold text-mygreen-500 md:text-2xl lg:text-2xl">
          <img
            src="img/star.svg"
            alt="icon bintang"
            className="h-6 align-baseline mr-3 md:h-7 lg:h-8"
            onContextMenu={(event) => event.preventDefault()}
          />
          MADE IN USA
        </li>
        <li className="flex font-signika-negative font-bold text-2xl text-myorange-500 md:text-3xl lg:text-5xl pt-4">
          DSP WHITE CLINIC 35% H²O² RED 
        </li>
      </ul>
      <div className="md:w-5/12 lg:w-6/12">
        <img
          src="img/model.png"
          alt="Model"
          className="max-h-80 mx-auto mt-14 md:mt-0 md:mx-0 md:ml-auto md:max-h-96 lg:max-h-screen"
          onContextMenu={(event) => event.preventDefault()}
        />
      </div>
    </div>
  );
};

export default Header;
