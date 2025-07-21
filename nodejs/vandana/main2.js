import mongoose from "mongoose";
import express from "express";

//  Use 'mongoose', not 'mongose'
let a = await mongoose.connect("mongodb://localhost:27017/");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
