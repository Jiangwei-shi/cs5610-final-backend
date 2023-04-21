import * as usersDao from "../../users/users-dao.js";

const register = async (req, res) => {
  const newUser = await usersDao.createUser(req.body);
  res.json(newUser);
};

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await usersDao.findUserByCredentials(username, password);
  if (user) {
    req.session["currentUser"] = user;
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const profile = async (req, res) => {
  const currentUser = req.session["currentUser"];
  if (!currentUser) {
    res.sendStatus(404);
    return;
  }
  res.json(currentUser);
};

const logout = async (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};

// const update = async (req, res) => {
//   // TODO: Implement update functionality
// };

export default (app) => {
  app.post("/api/users/register", register);
  app.post("/api/users/login", login);
  app.post("/api/users/profile", profile);
  app.post("/api/users/logout", logout);
  // app.put("/api/users", update);
};

