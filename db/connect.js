const mongoose = require("mongoose");

// uri =
//   "mongodb+srv://ALI:ehtisham50@aliapi.v4wi1i8.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (uri) => {
  try {
    // console.log("db connect successfully");
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
