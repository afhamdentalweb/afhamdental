import React from "react";

const Testimony = () => {
  return (
    <div className="bg-blue-pattern bg-cover bg-center">
      <div className="container mx-auto px-5 py-28">
        <div className="mb-16 space-y-3">
          <h5 className="font-signika-negative font-bold text-4xl text-mygreen-500 uppercase">
            RATUSAN DOKTER DI INDONESIA & JUTAAN ORANG DI DUNIA TELAH
            MEMBUKTIKAN
          </h5>
          <p className="text-[#0e0e0e]">
            Tingkat keberhasilannya lewat testimoni yang mereka sampaikan
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-5 md:gap-16 lg:gap-24">
          <img
            src="img/beforeafter1.png"
            alt="Before dan after produk"
            className="w-full h-auto md:w-5/12 md:h-auto"
            onContextMenu={(event) => event.preventDefault()}
          />
          <img
            src="img/beforeafter2.png"
            alt="Before dan after produk"
            className="w-full h-auto md:w-5/12 md:h-auto"
            onContextMenu={(event) => event.preventDefault()}
          />
          <img
            src="img/beforeafter3.png"
            alt="Before dan after produk"
            className="w-full h-auto md:w-5/12 md:h-auto"
            onContextMenu={(event) => event.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
