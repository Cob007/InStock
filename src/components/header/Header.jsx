import "./Header.scss";
import Logo from "../../assets/Logo/InStock-Logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img className="header__logo" src={Logo} alt="InStock Logo" />
        <section className="header__links">
          <NavLink to={"/warehouse"} className="header__linkWarehouses">
            <div>
              <p>Warehouses</p>
            </div>
          </NavLink>
          <NavLink to={"/inventory"} className="header__linkInventory">
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
