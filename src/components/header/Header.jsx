import './Header.scss'
import Logo from '../../assets/Logo/InStock-Logo.svg'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <img className='header__logo' src={Logo} alt="InStock Logo" />
      <section className='header__links'>
        <Link className='header__link'>
          <div>
            <p>Warehouses</p>
          </div>
        </Link>
        <Link className='header__link'>
          <div>
            <p>Inventory</p>
          </div>
        </Link>
      </section>
    </header>
  );
};

export default Header;
