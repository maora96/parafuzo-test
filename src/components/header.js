import React, { useState } from "react";
import Logo from "../assets/avatar_parking.png";
import Hamburguer from "../assets/menu.png";
import Close from "../assets/close.png";
import Menu from "./menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <img src={Logo} alt="Parking Logo" />
        <img
          src={isOpen ? Close : Hamburguer}
          alt="Menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </nav>

      {isOpen ? <Menu /> : ""}
    </header>
  );
}
