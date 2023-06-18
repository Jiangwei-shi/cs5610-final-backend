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



const updateUser = async (req, res) => {
  const userIdToUpdate = req.params.uid;
  const updates = req.body;
  const status = await usersDao.updateUser(userIdToUpdate, updates);
  res.json(status);
};

const profile = async (req, res) => {
  const currentUser = req.session["currentUser"];
  if (!currentUser) {
    res.sendStatus(404);
    return;
  }
  res.json(currentUser);
};


export default (app) => {
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:uid", findUserById);
  app.put("/api/users/:uid", updateUser);
  app.post("/api/users/profile", profile);
};
