import Products from "../db/Products.ts";

// Gel all products
export const getProducts = async (c: any) => {
  try {
    const products = await Products.find();
    console.log(products);
    return c.json(products);
  } catch (error) {
    console.log(error);
  }
};

// get product by id
export const getProductById = async (c: any) => {
  try {
    const id = c.req.param("id");
    const productId = await Products.findOne({ _id: id });
    console.log(productId);
    return c.json(productId);
  } catch (error) {
    console.log(error);
  }
};

// Update product
export const updateProduct = async (c: any) => {
  try {
    const id = c.req.param("id");
    const { name, price, email } = await c.req.formData();
    const updateProduct = await Products.findOneAndUpdate(
      { _id: id },
      { name, price, email }
    );
    console.log(updateProduct);
    return c.json(updateProduct);
  } catch (error) {
    console.log(error);
  }
};

// create product
export const createProduct = async (c: any) => {
  try {
    const { name, price, email } = await c.req.json();
    const product = await Products.create({ name, price, email });
    console.log(product);
    return c.json(product);
  } catch (error) {
    console.log(error);
  }
};

// delete product
export const deleteProduct = async (c: any) => {
  try {
    const id = c.req.param("id");
    const deleteProduct = await Products.findOneAndDelete({ _id: id });
    console.log(deleteProduct);
    return c.json(deleteProduct);
  } catch (error) {
    console.log(error);
  }
};
