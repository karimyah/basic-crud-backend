import { Hono } from "hono";
import {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product-control.ts";
const router = new Hono();

router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/", createProduct);

// Update product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

export default router;
