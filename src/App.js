import "./App.css";
import {
  Navbar,
  LandingPage,
  ProductsPage,
} from "./Layouts/AllComponents/AllComponents";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="productsPage" element={<ProductsPage />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
