import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./pages/SamplePage/SamplePage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import NewInventory from "./pages/NewInventory/NewInventory.jsx";
import InventoryList from "./pages/InventoryList/InventoryList.jsx";
import EditInventory from "./pages/EditInventory/EditInventory.jsx";
import WarehousePage from "./pages/WarehouseList/wareHouseListPage.jsx";
import WarehouseInventory from "./pages/WarehouseInventory/WarehouseInventory.jsx";
import InventoryDetail from "./pages/InventoryDetail/InventoryDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="backgroundBlack"></div>
      <Routes>
        <Route path="/" element={<WarehousePage />} />

        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/inventory/new" element={<NewInventory />} />
        <Route path="/inventory/:inventoryId" element={<InventoryDetail />} />
        <Route path="/inventory/:itemID/edit" element={<EditInventory />} />

        <Route path="/warehouse" element={<WarehousePage />} />
        <Route path="warehouse/new" element={<NewWarehouse />} />
        <Route path="warehouse/:warehouseId" element={<WarehouseInventory />} />
        <Route path="warehouse/:warehouseID/edit" element={<EditWarehouse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
