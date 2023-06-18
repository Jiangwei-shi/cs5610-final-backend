import mongoose from "mongoose";

const followSchema = new mongoose.Schema(
  {
    follower_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    followed_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    created_at: { type: Date, default: Date.now }
  },
  { collection: "follows" }
);

export default followSchema;