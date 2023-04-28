import * as usersDao from "../../users/users-dao.js";

const followUser = async (req, res) => {
  const userId = req.params.uid;
  const followUserId = req.params.followUid;
  await usersDao.followUser(userId, followUserId);
  res.sendStatus(200);
};

const unfollowUser = async (req, res) => {
  const userId = req.params.uid;
  const unfollowUserId = req.params.followUid;
  await usersDao.unfollowUser(userId, unfollowUserId);
  res.sendStatus(200);
};

const getUserFollowers = async (req, res) => {
  const userId = req.params.uid;
  const followers = await usersDao.findUserFollowers(userId);
  res.json(followers);
};

const getUserFollowings = async (req, res) => {
  const userId = req.params.uid;
  const followings = await usersDao.findUserFollowings(userId);
  res.json(followings);
};

export default (app) => {
  app.post("/api/users/:uid/follow/:followUid", followUser);
  app.delete("/api/users/:uid/unfollow/:followUid", unfollowUser);
  app.get("/api/users/:uid/followers", getUserFollowers);
  app.get("/api/users/:uid/followings", getUserFollowings);
};