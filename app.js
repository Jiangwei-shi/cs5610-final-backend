import express from "express";
import session from "express-session";
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import AuthController from "./controllers/users/auth-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import SearchController from "./controllers/search/search-controller.js";
import DetailController from "./controllers/search/detail-controller.js";

import mongoose from "mongoose";
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/tuiter";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
);

HelloController(app);
UserController(app);
AuthController(app);
TuitsController(app);
SearchController(app);
DetailController(app);

app.listen(process.env.PORT || 4000);
