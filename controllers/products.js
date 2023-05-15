const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name, feature } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
    // console.log(queryObject);
  }
  if (feature) {
    queryObject.feature = feature;
    // console.log(queryObject);
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
    console.log(queryObject);
  }
  const myData = await Product.find(queryObject);
  // const myData = await Product.find({ name: "iPhone 12 Pro" }); // search by name
  res.status(200).json({ myData });
};
const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  // res.status(200).json({ msg: "I am getAllProductsTesting" });
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
