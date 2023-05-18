const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name, feature, sort, select } = req.query;
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
  let apiData = Product.find(queryObject);
  if (sort) {
    let sortfix = sort.split(",").join(" ");
    apiData = apiData.sort(sortfix);
  }
  if (select) {
    // let selectfix = select.replace(",", " ");
    let selectfix = select.split(",").join(" ");
    apiData = apiData.select(selectfix);
  }

  const myData = await apiData;
  // const myData = await Product.find({ name: "iPhone 12 Pro" }); // search by name
  res.status(200).json({ myData });
};
const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).select("name company");
  // res.status(200).json({ msg: "I am getAllProductsTesting" });
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
