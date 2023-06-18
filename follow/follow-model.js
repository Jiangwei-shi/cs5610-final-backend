import mongoose from "mongoose";
import followSchema from "./follow-schema.js";
const followModel = mongoose.model("follows", followSchema);
export default followModel;