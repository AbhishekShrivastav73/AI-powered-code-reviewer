require("dotenv").config();
const express = require("express");
const app = express();
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({status: "ok"});
});
app.use("/ai", aiRoutes);

module.exports = app;


