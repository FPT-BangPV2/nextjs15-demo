import cors from "cors";
import express from "express";

import productRoutes from "./src/routes/product.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  //Page product public: Cache-Control: public, max-age=300
  // res.set("Cache-Control", "public, max-age=300");

  //Page private: Cache-Control: private, no-store
  // res.set("Cache-Control", "private, no-store");

  //API return data dynamic: Cache-Control: no-store, must-revalidate
  // res.set("Cache-Control", "no-store, must-revalidate");

  next();
});

app.use("/products", productRoutes);

export default app;
