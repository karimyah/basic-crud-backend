import { Hono } from "hono";
import mongoose from "mongoose";
// import Products from "./db/Products";
import productRouter from "./routes/product-route";

const app = new Hono();

//routes
app.route("/api/products", productRouter);

// connect mongodb
const run = () => {
  try {
    mongoose.connect("mongodb://localhost:27017");
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.log(error);
  }
};

run();
app.get("/", (c) => {
  return c.html("<h1>Hello World!</h1>");
});

// create product

// app.get("/api/products", async (c: any) => {
//   try {
//     const products = await Products.find();
//     console.log(products);
//     return c.json(products);
//   } catch (error) {
//     console.log({ error: error });
//   }
// });

// create product
// app.post("/api/products", async (c) => {
//   try {
//     const { name, price, email } = await c.req.json();
//     const products = await Products.create({ name, price, email });
//     console.log(products);
//     return c.json(products);
//   } catch (error) {
//     console.log({ error: error });
//   }
// });

export default app;
