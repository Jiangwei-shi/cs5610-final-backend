import mongoose from "mongoose";
import bookmarksSchema from "./bookmarks-schema";

const bookmarkModel = mongoose.model("BookmarkModel", bookmarksSchema);
export default bookmarkModel;
