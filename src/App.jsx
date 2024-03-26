import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./pages/SamplePage/SamplePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SamplePage/>} />
        <Route path="/inventory" element={<SamplePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
