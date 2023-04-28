import usersModel from "./users-model.js";
export const findAllUsers = () => usersModel.find();
export const findUserById = (uid) => usersModel.findById(uid);
export const findUserByUsername = (username) =>
  usersModel.findOne({ username });
export const findUserByCredentials = (username, password) =>
  usersModel.findOne({ username, password });
export const createUser = (user) => usersModel.create(user);
export const updateUser = (uid, user) =>
  usersModel.updateOne({ _id: uid }, user);
export const deleteUser = (uid) => usersModel.deleteOne({ _id: uid });
export const followUser = (userId, followUserId) =>
  usersModel
  .updateOne({ _id: userId }, { $addToSet: { followings: followUserId } })
  .then(() =>
    usersModel.updateOne(
      { _id: followUserId },
      { $addToSet: { followers: userId } }
    )
  );

export const unfollowUser = (userId, unfollowUserId) =>
  usersModel
  .updateOne({ _id: userId }, { $pull: { followings: unfollowUserId } })
  .then(() =>
    usersModel.updateOne(
      { _id: unfollowUserId },
      { $pull: { followers: userId } }
    )
  );

export const findUserFollowers = (userId) =>
  usersModel.findById(userId).populate("followers").then((user) => user.followers);

export const findUserFollowings = (userId) =>
  usersModel.findById(userId).populate("followings").then((user) => user.followings);
