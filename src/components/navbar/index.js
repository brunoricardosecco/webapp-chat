import React from "react";
import inovaLogo from "../../Assets/Designsemnome.png";
import "./style.css";

function Navbar() {
  return (
    <div className="navBar">
      <img src={inovaLogo} alt="logo" />
      <div className="navBarMenuContainer">
        <ul className="navBarMenuList">
          <li>
            <div> Nosso Grupo</div>
          </li>
          <li>
            <div> Parceiros</div>
          </li>
          <li>
            <div> Contato</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
