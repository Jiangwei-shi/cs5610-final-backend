const bookmarksSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    result_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "results",
      required: true,
    },
  },
  { collection: "bookmarks" }
);

export default bookmarksSchema;
