import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./pages/SamplePage/SamplePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SamplePage/>} />

        <Route path="/inventory" element={<SamplePage/>} />
        <Route path="/inventory/new" element={<SamplePage/>} />
        <Route path="/inventory/:itemID" element={<SamplePage/>} />
        <Route path="/inventory/:itemID/edit" element={<SamplePage/>} />

        <Route path="/warehouse" element={<SamplePage/>} />
        <Route path="warehouse/new" element={<SamplePage/>} />
        <Route path="warehouse/:warehouseID/" element={<SamplePage/>} />
        <Route path="warehouse/:warehouseID/edit" element={<SamplePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
