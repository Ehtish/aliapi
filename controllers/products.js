const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const myData = await Product.find({});
  // const myData = await Product.find({ name: "iPhone 12 Pro" }); // search by name
  res.status(200).json({ myData });
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am getAllProductsTesting" });
};

module.exports = { getAllProducts, getAllProductsTesting };
