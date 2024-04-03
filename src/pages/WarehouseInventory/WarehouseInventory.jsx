import { useParams } from "react-router-dom";
import "./WarehouseInventory.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehouseInventoryCard from "../../components/WarehouseInventoryCard/WarehouseInventoryCard";
import SortIcon from "../../assets/Icons/sort-24px.svg"

const WarehouseInventory = () => {
  const { warehouseId } = useParams();

  const [inventoryList, setInventoryList] = useState([]);
  const [warehouseDetails, setWarehouseDetails] = useState({});


  const loadInvertoryByWarehouseId = async (warehouseId) => {
    try {
      const data = await axios.get(
        `http://localhost:8080/inventories/warehouse/${warehouseId}`
      );
      setInventoryList(data.data);
    } catch (err) {
      console.log(`loadInvertoryByWarehouseId error: ${err}`);
    }
  };

  const loadSingleWarehouseDatailes = async (warehouseId) => {
    try {
        const data = await axios.get(
          `http://localhost:8080/warehouses/${warehouseId}`
        );
        setWarehouseDetails(data.data);
      } catch (err) {
        console.log(`loadInvertoryByWarehouseId error: ${err}`);
      }
  }
  useEffect(() => {
    loadInvertoryByWarehouseId(warehouseId);
    loadSingleWarehouseDatailes(warehouseId)
  }, []);

  return (
    <main className="cont">
    


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
        <div className="cont__rows cont__action">
            <p className="cont__rows-name">ACTIONS</p>
        </div>
      </section>
      {inventoryList.map((inventory, index) => (
        <div key={index}>
          <div className="cont__divider" />
          <WarehouseInventoryCard inventory={inventory} />
        </div>
      ))}
    </main>
  );
};
export default WarehouseInventory;
