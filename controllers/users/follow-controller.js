import * as followDao from "../../follow/follow-dao.js";

const createFollow = async (req, res) => {
  const { follower_id, followed_id } = req.body;
  if (!follower_id || !followed_id) {
    res.status(400).json({ message: "follower_id and followed_id are required." });
    return;
  }
  const follow = { follower_id, followed_id };
  const newFollow = await followDao.createFollow(follow);
  res.status(201).json(newFollow);
};

const deleteFollow = async (req, res) => {
  const follower_id = req.body.follower_id;
  const followed_id = req.body.followed_id;

  if (!follower_id || !followed_id) {
    res.status(400).json({ message: "follower_id and followed_id are required." });
    return;
  }

  await followDao.deleteFollow(follower_id, followed_id);
  res.sendStatus(200);
};

const findAllFollows = async (req, res) => {
  const allFollows = await followDao.findAllFollows();
  res.json(allFollows);
};

const getUserFollowers = async (req, res) => {
  const userId = req.params.uid;
  const followers = await followDao.findFollowersByUserId(userId);
  res.json(followers);
};

const getUserFollowings = async (req, res) => {
  const userId = req.params.uid;
  const followings = await followDao.findFollowingsByUserId(userId);
  res.json(followings);
};

export default (app) => {
  app.post("/api/follows", createFollow);
  app.delete("/api/follows", deleteFollow);
  app.get("/api/follows", findAllFollows);
  app.get("/api/users/:uid/followers", getUserFollowers);
  app.get("/api/users/:uid/followings", getUserFollowings);
};