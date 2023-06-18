import followModel from "./follow-model.js";

export const findAllFollows = () => followModel.find();

export const createFollow = (follow) => followModel.create(follow);

export const deleteFollow = (follower_id, followed_id) =>
  followModel.deleteOne({ follower_id, followed_id });

export const findFollowersByUserId = (userId) =>
  followModel
  .find({ followed_id: userId })
  .populate("follower_id")
  .then((follows) => follows.map((follow) => follow.follower_id));

export const findFollowingsByUserId = (userId) =>
  followModel
  .find({ follower_id: userId })
  .populate("followed_id")
  .then((follows) => follows.map((follow) => follow.followed_id));