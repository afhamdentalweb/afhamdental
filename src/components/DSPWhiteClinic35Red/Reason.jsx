import React from "react";

const Reason = () => {
  return (
    <div className="px-5 py-32 bg-blue-pattern bg-cover">
      <div className="container mx-auto flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-14 md:items-center lg:justify-between">
        <div className="md:w-1/2 lg:w-4/12">
          <h5 className="font-signika-negative font-bold text-4xl text-mygreen-500 uppercase lg:text-5xl">
            Kenapa harus pilih bahan bleaching DSP ?
          </h5>
        </div>
        <div className="md:w-1/2 lg:w-6/12">
          <ul className="space-y-2 w-full">
            <li className="flex w-full">
              <img
                src="img/check-list.svg"
                alt="icon bintang"
                className="h-6 align-baseline mr-3"
                onContextMenu={(event) => event.preventDefault()}
              />
              <span className="font-bold uppercase">
                Tanpa menggunakan sinar
              </span>
            </li>
            <li className="flex">
              <img
                src="img/check-list.svg"
                alt="icon bintang"
                className="h-6 align-baseline mr-3"
                onContextMenu={(event) => event.preventDefault()}
              />
              <span className="flex flex-col uppercase">
                <span className="font-bold">Amat sangat </span>
                mudah diaplikasikan
              </span>
            </li>
            <li className="flex">
              <img
                src="img/check-list.svg"
                alt="icon bintang"
                className="h-6 align-baseline mr-3"
                onContextMenu={(event) => event.preventDefault()}
              />
              <span className="flex flex-col uppercase">
                <span className="font-bold">Lebih awet </span>
                Dapat digunakan 8 -10 pasien sehingga lebih ekonomis
              </span>
            </li>
            <li className="flex">
              <img
                src="img/check-list.svg"
                alt="icon bintang"
                className="h-6 align-baseline mr-3"
                onContextMenu={(event) => event.preventDefault()}
              />
              <span className="flex flex-col uppercase">
                <span className="font-bold">
                  Memiliki PH netral dan stabil{" "}
                </span>
                selama proses aplikasi
              </span>
            </li>
            <li className="flex">
              <img
                src="img/check-list.svg"
                alt="icon bintang"
                className="h-6 align-baseline mr-3"
                onContextMenu={(event) => event.preventDefault()}
              />
              <span className="flex flex-col uppercase">
                <span className="font-bold">Adanya indikator warna </span>
                yang memudahkan dokter untuk mengidentifikasi bahan bekerja
                secara optimal
              </span>
            </li>
            <li className="flex">
              <img
                src="img/check-list.svg"
                alt="icon bintang"
                className="h-6 align-baseline mr-3"
                onContextMenu={(event) => event.preventDefault()}
              />
              <span className="font-bold uppercase">
                Dapat digunakan untuk gigi vital dan non vital
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reason;
