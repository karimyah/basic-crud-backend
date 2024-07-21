import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please enter product name"],
  },
  price: {
    type: Number,
    // required: [true, "Please enter product price"],
    // maxLength: [8, "Price can not exceed 8 characters"],
  },

  email: {
    type: String,
    // required: [true, "Please enter product email"],
    // unique: true,
  },
});

export default mongoose.model("Product", productSchema);
