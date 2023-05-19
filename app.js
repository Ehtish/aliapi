require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 3000;
const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("khush amdeed express");
});

// middleware or to set router
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
};
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
start();
