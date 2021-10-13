const { model, Schema } = require("mongoose");

const parkingSchema = new Schema ({
    carNo: {type: Number, required: true},
},
{
    timestamps: true,
    versionKey: false
});

module.exports = model ("parking", parkingSchema);