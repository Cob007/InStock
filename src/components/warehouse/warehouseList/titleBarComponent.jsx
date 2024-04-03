import './titleBarComponent.scss'
import search from '../../../assets/Icons/search-24px.svg'
import sort from '../../../assets/Icons/sort-24px.svg'
import { Link } from 'react-router-dom'

const titleBar = () => {
  return (
    <div className='parent'>
      <form className="actionPanel">
        <p className="actionPanel__title">Warehouses</p>
        <div className='notLogo'>
          <input label="" className="actionPanel__searchbar" placeholder="Search..."></input>
          <img className='searchIcon mobileOnly' src={search}/>
          <Link to="new" className="actionPanel__button">+ Add New Warehouse</Link>
        </div>
      </form>
      </div>
  );
};

export default titleBar;
