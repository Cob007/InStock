import { useEffect, useState } from "react";
import AddButton from "../../components/AddButton/AddButton";
import SearchInput from "../../components/SearchInput/SeachInput";
import SortIcon from "../../assets/Icons/sort-24px.svg"
import "./InventoryList.scss";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const InventoryList = () => {

    const  navigate  = useNavigate()

    const handleClickAddButton = () => {
        navigate('/inventory/new');
    }



  const [inventoryList, setInventoryList] = useState([]);

  const loadRemoteInventory = async () => {
    try {
        const data = await axios.get("http://localhost:8080/inventories")
        setInventoryList(data.data)
    }catch (err){
        console.log(err)
    }
  };

  useEffect(() => {
    loadRemoteInventory();
  }, []);

  return (
    <main className="cont">
      <article className="cont__header-section">
        <h1 className="cont__header">Inventory</h1>
        <section className="cont__widget">
          <SearchInput />
          <AddButton handleClickAddButton={handleClickAddButton} />
        </section>
      </article>
      <section className="cont__table-def">
        <div className="cont__item">
            <p className=" cont__rows-inven" >INVENTORY ITEM</p>
            <img className="cont__rows-icon" src={SortIcon} alt="sort icon image" />
        </div>

        <div className="cont__rows">
            <p className="cont__rows-name">CATEGORY</p>
            <img className="cont__rows-icon" src={SortIcon} alt="sort icon image" />
        </div>

        <div className="cont__rows">
            <p className="cont__rows-name">STATUS</p>
            <img className="cont__rows-icon" src={SortIcon} alt="sort icon image" />
        </div>

        <div className="cont__rows cont__qty">
            <p className="cont__rows-name">QTY</p>
            <img className="cont__rows-icon" src={SortIcon} alt="sort icon image" />
        </div>

        <div className="cont__rows">
            <p className="cont__rows-name">WAREHOUSE</p>
            <img className="cont__rows-icon" src={SortIcon} alt="sort icon image" />
        </div>

        <div className="cont__rows cont__action">
            <p className="cont__rows-name">ACTIONS</p>
        </div>
      </section>
      {inventoryList.map((inventory, index) => (
        <div key={index}>
            <div className="cont__divider" />
            <InventoryCard inventory={inventory} />
        </div>
      ))}
    </main>
  );
};

export default InventoryList;
