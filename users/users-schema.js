import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    dob: String,
    email: String,
    createdAt: { type: Date, default: Date.now },
    location: String,
    bio: String,
    role: {
      type: String,
      default: "user",
      enum: ["admin", "user", "guest", "moderator"],
    },
  },
  { collection: "users" }
);

export default usersSchema;
