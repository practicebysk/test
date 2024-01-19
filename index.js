const express = require("express");
const router = require("./Route");

const app = express();
app.use("/api",router);


app.listen(3001, () => {
    console.log(`Server Started on Port,${3001}`);
  });