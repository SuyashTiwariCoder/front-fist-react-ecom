import "./App.css";
import {
  Navbar,
  LandingPage,
  ProductsPage,
} from "./Layouts/AllComponents/AllComponents";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="productsPage" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
