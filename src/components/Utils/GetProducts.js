import axios from "axios";
import { useState, useEffect } from "react";

const [product, setProduct] = useState([]);

const GetProducts = async () => {
  try {
    const { data } = await axios.get("/api/products");
    setProduct(data.products);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => getProducts(), []);

export default GetProducts;
