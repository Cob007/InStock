import "./Header.scss";
import Logo from "../../assets/Logo/InStock-Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [location, setLocation] = useState(useLocation())
  const path = '/warehouse'

  return (
    <header className="header">
      <div className="header__content">
        <img className="header__logo" src={Logo} alt="InStock Logo" />
        <section className="header__links">
          <NavLink to={"/warehouse"} className={`header__linkWarehouses ${location === path ? ('active') : ('') }`}>
            <div>
              <p>Warehouses</p>
            </div>
          </NavLink>
          <NavLink to={"/inventory"} className={`header__linkInventory ${location === path ? ('active') : ('') }`}>
            <div>
              <p>Inventory</p>
            </div>
          </NavLink>
        </section>
      </div>
    </header>
  );
};

export default Header;
