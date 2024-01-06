const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api", router);

module.exports = app;
