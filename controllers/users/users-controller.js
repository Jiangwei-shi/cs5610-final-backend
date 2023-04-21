import * as usersDao from "../../users/users-dao.js";

const findAllUsers = async (req, res) => {
  const users = await usersDao.findAllUsers();
  res.json(users);
};

const findUserById = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersDao.findUserById(userId);
  res.json(user);
};

const deleteUser = async (req, res) => {
  const userIdToDelete = req.params.uid;
  const status = await usersDao.deleteUser(userIdToDelete);
  res.json(status);
};

const updateUser = async (req, res) => {
  const userIdToUpdate = req.params.uid;
  const updates = req.body;
  const status = await usersDao.updateUser(userIdToUpdate, updates);
  res.json(status);
};

export default (app) => {
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:uid", findUserById);
  app.delete("/api/users/:uid", deleteUser);
  app.put("/api/users/:uid", updateUser);
};
