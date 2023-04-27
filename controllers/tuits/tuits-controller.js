import * as tuitsDao from '../../tuits/tuits-dao.js'
import * as usersDao from "../../users/users-dao.js";
const createTuit = async (req, res) => {
  try {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;

    const user = await usersDao.findUserById(newTuit.uid);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    newTuit.username = user.firstName;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao
  .updateTuit(tuitdIdToUpdate,
    updates);
  res.json(status);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao
  .deleteTuit(tuitdIdToDelete);
  res.json(status);
}

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};