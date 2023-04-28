import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    result_id: { type: String, required: true },
    rating: { type: Number, required: true },
    text: { type: String, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "reviews" }
);

export default reviewSchema;
