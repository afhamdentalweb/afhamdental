import React from "react";

const DoubleDesensitizer = () => {
  return (
    <div className="bg-blue-pattern bg-cover bg-center">
      <div className="container mx-auto px-5 py-28 gap-20 md:flex md:items-center lg:gap-36">
        <div className="mb-16 space-y-3 md:w-1/2">
          <h5 className="font-signika-negative font-bold text-4xl text-mygreen-500 uppercase">
            DSP Desensitizer ANTI NGILU
          </h5>
          <p className="text-[#0e0e0e] text-justify">
            <span className="font-bold">
              Dokter bisa sekaligus menggunakan produk DSP Desensitizer
            </span>{" "}
            yang  diperuntukan untuk kondisi gigi yang sensitif, efek samping
            akibat pengunaan bahan kimia seperti Bleaching ataupun faktor
            lainnya sehingga khususnya pasien yang sedang dilakukan tindakan
            bleaching bisa lebih nyaman
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="img/double-desensitizer.png"
            alt="Double Desensitizer"
            className="w-full h-auto"
            onContextMenu={(event) => event.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
};

export default DoubleDesensitizer;
