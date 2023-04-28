import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    uid: String,
    tuit: String,
    username: String,
    image: String,
    likes: Number,
    liked: Boolean,
  },
  { collection: "tuits" }
);
export default schema;
