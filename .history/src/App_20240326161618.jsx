import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./pages/SamplePage/SamplePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SamplePage/>} />
        <Route path="/inventory" element={<SamplePage/>} />
        <Route path="/inventory/" element={<SamplePage/>} />
        <Route path="/warehouse" element={<SamplePage/>} />
        <Route path="warehouse/:id/" element={< />} />
        <Route path="warehouse/:id/edit" element={< />} />
        <Route path="warehouse/inventory" element={< />} />
        <Route path="warehouse/new" element={< />} />
        <Route path="warehouse/new" element={< />} />
        <Route path="" element={</>} />
        <Route path="" element={</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
