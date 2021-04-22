import React from "react";
import Logo from "../assets/avatar_parking.png";
import Hamburguer from "../assets/menu.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Parking Logo" />
        <img src={Hamburguer} alt="Menu" />
      </nav>
    </header>
  );
}
