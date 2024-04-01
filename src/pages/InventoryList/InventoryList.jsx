import AddButton from "../../components/AddButton/AddButton";
import SearchInput from "../../components/SearchInput/SeachInput";
import "./InventoryList.scss";
const InventoryList = () => {
  return (
    <main className="cont">
      <section className="cont__header-section">
        <h1 className="cont__header">Inventory</h1>
        <section className="cont__widget">
          <SearchInput />
          <AddButton />
        </section>
      </section>
    </main>
  );
};

export default InventoryList;
