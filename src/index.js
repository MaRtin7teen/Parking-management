const express = require('express');
const parkingController = require("./controllers/Parking.controller");
const app = express();

app.use(express.json());

app.use("/parkings", parkingController);

module.exports = app;