const express = require("express");

const dummyRoutes = require("./routes/dummy.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", dummyRoutes);
module.exports = app;
