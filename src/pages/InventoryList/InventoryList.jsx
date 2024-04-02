import { useEffect, useState } from "react";
import AddButton from "../../components/AddButton/AddButton";
import SearchInput from "../../components/SearchInput/SeachInput";
import "./InventoryList.scss";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([{ id: 1 }, { id: 2 }]);

  const loadRemoteInventory = async () => {};

  useEffect(() => {
    loadRemoteInventory();
  }, []);

  return (
    <main className="cont">
      <article className="cont__header-section">
        <h1 className="cont__header">Inventory</h1>
        <section className="cont__widget">
          <SearchInput />
          <AddButton />
        </section>
      </article>
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
