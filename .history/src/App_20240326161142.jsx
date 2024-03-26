import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./pages/SamplePage/SamplePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SamplePage/>} />
        <Route path="/inventory" element={<SamplePage/>} />
        <Route path="warehouse" element={< />} />
        <Route path="" element={</>} />
        <Route path="" element={</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
