import React from "react";
import "../../Layouts/ProductsPage/ProductPage.css";
import {
  ProductSidebar,
  ProductMainContent,
} from "../AllComponents/AllComponents";

function ProductsPage() {
  return (
    <>
      <div className="container">
        <ProductSidebar />
        <ProductMainContent />
      </div>
    </>
  );
}

export default ProductsPage;
