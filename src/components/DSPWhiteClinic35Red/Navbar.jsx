import React from "react";

const Navbar = () => {
  return (
    <nav className="container mx-auto px-5 py-8 flex justify-between">
      <img
        src="img/logo-dsp-white.png"
        alt="Logo DSP"
        className="h-12"
        onContextMenu={(event) => event.preventDefault()}
      />
      <img
        src="img/logo-afham-dental.png"
        alt="Logo Afham Dental"
        className="h-12"
        onContextMenu={(event) => event.preventDefault()}
      />
    </nav>
  );
};

export default Navbar;
