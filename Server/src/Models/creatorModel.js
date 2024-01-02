import mongoose from "mongoose";

const creatorSchema = mongoose.Schema({}, { timestamps: true });

const creatorModel = mongoose.model("creators", creatorSchema);

export default creatorModel;
