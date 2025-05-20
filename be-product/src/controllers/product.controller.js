// const productService = require("../services/product.service");

// exports.getProducts = (req, res) => {
//   res.set("Cache-Control", "no-store, no-cache");
//   res.json(productService.getProducts);
// };

// exports.getProductById = (req, res) => {
//   const product = productService.getProductById(req.params.id);
//   if (!product) return res.status(404).json({ message: "Not found" });
//   res.set("Cache-Control", "no-store, no-cache");
//   res.json(product);
// };

import { getAllProducts, getProductById } from "../services/product.service.js";
//  const productService = require("../services/product.service");

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách sản phẩm" });
  }
};

export const getProductDetail = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy chi tiết sản phẩm" });
  }
};

// exports = {
//   getProducts,
//   getProductById,
// };
