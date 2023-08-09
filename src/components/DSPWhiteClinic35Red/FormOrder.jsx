import React, { useState } from "react";

const FormOrder = () => {
  const [fullName, setFullName] = useState("");
  const [orderMessage, setOrderMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName("");
    setOrderMessage("");
    const phoneNumber = "6285161624841",
      message = `Halo, saya ${fullName}.%0aBerikut ini adalah pesanan saya.%0a${orderMessage}`,
      url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      id="order-form"
      className="bg-mygreen-500 bg-green-pattern bg-cover bg-center"
    >
      <div className="container mx-auto space-y-12 px-5 py-28">
        <h5 className="font-signika-negative font-bold text-4xl text-myorange-500 uppercase">
          Form Order
        </h5>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-white">
                Nama Lengkap
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                className="px-3 py-2 rounded-md"
                placeholder="Contoh : Afham"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="orderMessage" className="text-white">
                Tulis pesanan di sini
              </label>
              <textarea
                id="orderMessage"
                type="text"
                value={orderMessage}
                onChange={(e) => setOrderMessage(e.target.value)}
                placeholder="Contoh : Paket 3, 3 box dsp tambah desensitizer"
                className="px-3 py-2 rounded-md"
                rows={6}
                autoComplete="off"
                required
              />
            </div>
            <button
              type="submit"
              className="w-fit bg-myorange-500 px-8 py-2 rounded-md text-white"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormOrder;
