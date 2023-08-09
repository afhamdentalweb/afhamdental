import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-blue-pattern bg-cover bg-center">
      <div className="container mx-auto px-5 py-28 pb-48 flex flex-col space-y-8 md:items-start md:justify-between md:flex-row md:space-y-0">
        <div className="md:w-6/12">
          <h5 className="font-signika-negative font-bold text-4xl text-mygreen-500 uppercase">
            Contact US
          </h5>
        </div>
        <div className="md:w-4/12 space-y-4">
          <a
            href="https://instagram.com/afhamdental.id?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            className="flex items-start text-[#0e0e0e] md:ml-auto"
          >
            <img
              src="img/ig-icon-black.svg"
              alt="Instagram icon"
              className="w-6 mr-2"
            />
            @afhamdental.id
          </a>
          <a
            href="https://afhamdental.co.id/"
            target="_blank"
            className="flex items-start text-[#0e0e0e] md:ml-auto"
          >
            <img
              src="img/web-icon-black.svg"
              alt="Whatsapp icon"
              className="w-6 mr-2"
            />
            afhamdental.co.id
          </a>
          <a
            href="https://wa.me/6285161624841"
            target="_blank"
            className="flex items-start text-[#0e0e0e] md:ml-auto"
          >
            <img
              src="img/wa-icon-black.svg"
              alt="Whatsapp icon"
              className="w-6 mr-2"
            />
            (+62) 851-6162-4841
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
