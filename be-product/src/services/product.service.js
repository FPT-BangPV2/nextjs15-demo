// const ProductModel = require("../models/product.model");

// exports.getProducts = () => ProductModel.getAll();
// exports.getProductById = (id) => ProductModel.getById(id);
// import axios from "axios";

// const axios = require("axios");

export const getAllProducts = async () => {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
    //   .then((res) => res.json())
    //   .then((json) => json);
    const json = await res.json();

    return json;
  } catch (error) {
    console.error("ERROR:", {
      code: error.code,
      message: error.message,
      response: error.response?.status,
      data: error.response?.data,
    });
  }
};

export const getProductById = async (id) => {
  console.log(id)
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const json = await res.json();

    return json;
  } catch (error) {
    console.error("ERROR:", {
      code: error.code,
      message: error.message,
      response: error.response?.status,
      data: error.response?.data,
    });
  }
};

// export default productService;
