const express = require("express");
const router = express.Router();
const Parkings = require("../models/parking.model");

router.get("/", async () => {
    try {
        // const ParkingId = req.params.id;
        // const Parked = await Parkings.findById(ParkingId).lean().exec();
        // return res.send({park: Parked});
    }
    catch (error) {
        // res.send({
        //     message: "id not found",
        //     error
        // })
    }
});

module.exports = router;