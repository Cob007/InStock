import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./pages/SamplePage/SamplePage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import NewInventory from "./pages/NewInventory/NewInventory.jsx";
import WarehousePage from "./pages/WarehouseList/wareHouseListPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="backgroundBlack"></div>
      <Routes>
        <Route path="/" element={<WarehousePage />} />

        <Route path="/inventory" element={<SamplePage />} />
        <Route path="/inventory/new" element={<NewInventory />} />
        <Route path="/inventory/:itemID" element={<SamplePage />} />
        <Route path="/inventory/:itemID/edit" element={<SamplePage />} />

        <Route path="/warehouse" element={<WarehousePage />} />
        <Route path="warehouse/new" element={<NewWarehouse />} />
        <Route path="warehouse/:warehouseID/" element={<SamplePage />} />
        <Route path="warehouse/:warehouseID/edit" element={<EditWarehouse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
