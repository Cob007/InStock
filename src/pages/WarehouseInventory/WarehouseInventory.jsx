import { useNavigate, useParams } from "react-router-dom";
import "./WarehouseInventory.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehouseInventoryCard from "../../components/WarehouseInventoryCard/WarehouseInventoryCard";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import DetailsTitleBar from "../../components/warehouse/warehouseDetails/Title";
import WarehouseDetail from "../../components/warehouse/warehouseDetails/WarehouseDetails";
import WarehouseDetails from "../../components/warehouse/warehouseDetails/WarehouseDetails";
import Modal from "../../components/modal/Modal";

const WarehouseInventory = () => {
  const { warehouseId } = useParams();
  const navigate = useNavigate();

  const [inventoryList, setInventoryList] = useState([]);
  const [warehouseDetails, setWarehouseDetails] = useState({});

  const handleEditInventory = (inventoryId) => {
    navigate(`/inventory/${inventoryId}/edit`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedItemName, setSelectedItemName] = useState("");

  const toggleModal = (inventoryId, inventoryName) => {
    setSelectedItemId(inventoryId);
    setSelectedItemName(inventoryName);
    setIsModalOpen(!isModalOpen);
  };

  const handleDeleteInventory = async (inventoryId) => {
    try {
      await axios.delete(`http://localhost:8080/inventories/${selectedItemId}`);
      const response = await axios.get(
        `http://localhost:8080/inventories//warehouse/${warehouseId}`
      );
      const updatedData = response.data;
      setInventoryList((prev) => updatedData);
      toggleModal();
    } catch (error) {
      console.error("Error deleting inventory item:", error);
    }
  };

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
  };
  useEffect(() => {
    loadInvertoryByWarehouseId(warehouseId);
    loadSingleWarehouseDatailes(warehouseId);
  }, []);

  return (
    <main className="cont">
      <DetailsTitleBar warehouseData={warehouseDetails} />
      <WarehouseDetails warehouseData={warehouseDetails} />

      <section className="cont__table-def">
        <div className="cont__item">
          <p className=" cont__rows-inven">INVENTORY ITEM</p>
          <img
            className="cont__rows-icon"
            src={SortIcon}
            alt="sort icon image"
          />
        </div>

        <div className="cont__rows">
          <p className="cont__rows-name">CATEGORY</p>
          <img
            className="cont__rows-icon"
            src={SortIcon}
            alt="sort icon image"
          />
        </div>

        <div className="cont__rows">
          <p className="cont__rows-name">STATUS</p>
          <img
            className="cont__rows-icon"
            src={SortIcon}
            alt="sort icon image"
          />
        </div>

        <div className="cont__rows cont__qty">
          <p className="cont__rows-name">QTY</p>
          <img
            className="cont__rows-icon"
            src={SortIcon}
            alt="sort icon image"
          />
        </div>
        <div className="cont__rows cont__action">
          <p className="cont__rows-name">ACTIONS</p>
        </div>
      </section>
      {inventoryList.map((inventory, index) => (
        <div key={index}>
          <div className="cont__divider" />
          <WarehouseInventoryCard
            inventory={inventory}
            handleEditInventory={handleEditInventory}
            toggleModal={toggleModal}
          />
        </div>
      ))}
      <div>
        <Modal
          isOpen={isModalOpen}
          toggleModal={toggleModal}
          inventoryName={selectedItemName}
          handleDelete={handleDeleteInventory}
        />
      </div>
    </main>
  );
};
export default WarehouseInventory;
