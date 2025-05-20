import cors from "cors";
import express from "express";

import productRoutes from "./src/routes/product.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  //Page sản phẩm công khai: Cache-Control: public, max-age=300
  // res.set("Cache-Control", "public, max-age=300");

  //Page tài khoản người dùng: Cache-Control: private, no-store
  //res.set("Cache-Control", "private, no-store");

  //API trả về dữ liệu động: Cache-Control: no-store, must-revalidate
  //   res.set("Cache-Control", "no-store, must-revalidate");

  next();
});

app.use("/products", productRoutes);

export default app;
