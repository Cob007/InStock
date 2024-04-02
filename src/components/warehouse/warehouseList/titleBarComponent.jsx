import './titleBarComponent.scss'
import search from '../../../assets/Icons/search-24px.svg'
import sort from '../../../assets/Icons/sort-24px.svg'

const titleBar = () => {
  return (
    <div className='parent'>
      <form className="actionPanel">
        <p className="actionPanel__title">Warehouses</p>
        <div className='notLogo'>
        <input label="" className="actionPanel__searchbar" placeholder="Search..."></input>
        <img className='searchIcon mobileOnly' src={search}/>
        <a href="warehouse/new" className="actionPanel__button">+ Add New Warehouse</a>
        </div>
      </form>
      </div>
  );
};

export default titleBar;
