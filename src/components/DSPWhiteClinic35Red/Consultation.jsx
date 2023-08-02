import React from "react";

function Consultation() {
  return (
    <div className="bg-blue-pattern bg-cover bg-center">
      <div className="container mx-auto px-5 py-28 flex flex-col space-y-8 md:items-center md:flex-row md:space-y-0">
        <div className="md:w-1/2">
          <h5 className="font-signika-negative font-bold text-4xl text-mygreen-500 uppercase">
            Konsultasi Dengan Tim Afham Dental
          </h5>
        </div>
        <div className="md:w-1/2">
          <a
            href="https://wa.me/6285161624841?text=Halo%20Tim%20Afhamdental,%20saya%20ingin%20bertanya%20terkait%20DSP%20White%20Clinic%2035%25%20H%C2%B2O%C2%B2%20Red.%C2%A0"
            target="_blank"
            className="flex items-center bg-myorange-500 text-white px-5 py-3 rounded-md w-fit md:ml-auto"
          >
            <img
              src="img/wa-icon.svg"
              alt="Whatsapp icon"
              className="w-6 mr-2"
            />
            Hubungi via WA
          </a>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
