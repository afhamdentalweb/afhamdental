import React from "react";

const HowToUse = () => {
  return (
    <div className="bg-blue-pattern bg-cover">
      <div className="container mx-auto flex flex-col py-28 px-5 space-y-12 md:space-y-0 md:flex-row md:justify-between md:items-center">
        <div className="md:w-5/12 space-y-3">
          <h5 className="font-signika-negative font-bold text-4xl text-mygreen-500 uppercase lg:text-5xl">
            Gimana cara pakainya ya, minaf?
          </h5>
          <p className="text-[#0e0e0e]">
            Untuk cara penggunaanya sangat mudah, silahkan tonton video berikut
            ini
          </p>
        </div>
        <div className="md:w-6/12 drop-shadow-xl">
          <iframe
            src="https://www.youtube.com/embed/k0RQmI0W0-s"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md h-72 w-full md:max-w-lg md:ml-auto"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
