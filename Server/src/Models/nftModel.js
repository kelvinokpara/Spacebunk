import mongoose from "mongoose";

const nftSchema = mongoose.Schema({}, { timestamps: true });

const nftModel = mongoose.model("nft", nftSchema);

export default nftModel;
