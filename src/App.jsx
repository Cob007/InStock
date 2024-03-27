import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./pages/SamplePage/SamplePage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewWarehouse from "./pages/NewWarehouse/NewWarehouse";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="backgroundBlack"></div>
      <Routes>
        <Route path="/" element={<SamplePage />} />

        <Route path="/inventory" element={<SamplePage />} />
        <Route path="/inventory/new" element={<SamplePage />} />
        <Route path="/inventory/:itemID" element={<SamplePage />} />
        <Route path="/inventory/:itemID/edit" element={<SamplePage />} />

        <Route path="/warehouse" element={<SamplePage />} />
        <Route path="warehouse/new" element={<NewWarehouse />} />
        <Route path="warehouse/:warehouseID/" element={<SamplePage />} />
        <Route path="warehouse/:warehouseID/edit" element={<SamplePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
