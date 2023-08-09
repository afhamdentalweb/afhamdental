import React from "react";

const SpecialPrice = () => {
  return (
    <div className="bg-mygreen-500 bg-green-pattern bg-cover bg-center">
      <div className="container mx-auto space-y-12 px-5 py-28">
        <h5 className="font-signika-negative font-bold text-4xl text-myorange-500 uppercase">
          Special Price
        </h5>
        <div className="flex justify-between">
          <div className="w-8/12 lg:w-5/12">
            <img
              src="img/special-price.png"
              alt="DSP WHITE CLINIC 35% H²O² RED special price"
              className="w-full"
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
          <div className="w-3/12">
            <img
              src="img/dsp-box-white.png"
              alt="DSP WHITE CLINIC 35% H²O² RED box "
              className="w-full"
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-10 p-10 border-2 border-myblue-200 rounded-md md:flex-row md:space-y-0 md:space-x-14">
          <div className="w-full max-w-xs">
            <img
              src="img/prophylaxis-imiprint.png"
              alt="prophylaxis"
              onContextMenu={(event) => event.preventDefault()}
            />
          </div>
          <div className="md:w-8/12">
            <h6 className="font-bold text-white text-2xl mb-2">
              PROPHYLAXIS PASTE
            </h6>
            <p className="font-normal text-white text-justify">
              For cleaning & polishing after scalling, also the function of
              prophylaxis paste has been proven clinically to smooth the enamel
              surface after hygiene cleaning. This helps to remove calculus,
              soft deposits, plaque and staining to all supragingival and
              unattached subgingival tooth surfaces. As discussed, it can also
              be used to enhance impression and the application of tooth
              whitening within surgery. With the introduction of direct access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPrice;
