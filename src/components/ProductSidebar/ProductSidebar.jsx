import React from "react";
import { SidebarContainerCard } from "../../Layouts/AllComponents/AllComponents";

function ProductSidebar() {
  const sidebarData = [
    {
      heading: "Category",
      type1: "gents",
      input1: `Gent's Wear`,
      type2: "ladies",
      input2: `Ladies's Wear`,
      type3: "smart",
      input3: `Smart Watches`,
    },
    {
      heading: "Ratings",
      type1: "fourOrAbove",
      input1: `4 star and above`,
      type2: "threeOrAbove",
      input2: `3 star and above`,
      type3: "twoOrAbove",
      input3: `2 star and above`,
      type4: "oneOrAbove",
      input4: `1 star and above`,
    },
    {
      heading: "Sort By",
      type1: "highToLow",
      input1: `High to Low`,
      type2: "lowToHigh",
      input2: `Low to High`,
    },
  ];
  return (
    <>
      <div className="products--sidebar">
        <button className="btn--clear">Clear</button>
        <div className="sidebar--container">
          <div className="sidebar--heading">Filter By Price</div>
          <div className="sidebar--content">
            <input type="range" />
          </div>
        </div>
        <SidebarContainerCard data={sidebarData} />
      </div>
    </>
  );
}

export default ProductSidebar;
