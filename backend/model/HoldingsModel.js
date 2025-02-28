// MODEL:- creating model on basis of schema,
// This Model will be used by MongoDB to create the Collection

const { model } = require("mongoose");

const { HoldingsSchema } = require("../schema/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
