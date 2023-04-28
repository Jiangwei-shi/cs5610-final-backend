import * as reviewDao from "../../reviews/review-dao.js";

const findReviews = async (req, res) => {
  const resultId = req.params.rid;

  const reviews = await reviewDao.getAllReviews(resultId);
  res.json(reviews);
};

const createReview = async (req, res) => {
  try {
    const newReview = req.body;
    newReview.likes = 0;
    // newReview.liked = false;

    const user = await usersDao.findUserById(newReview.uid);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    newReview.username = user.firstName;
    // const insertedTuit = await tuitsDao.createTuit(newTuit);
    // res.json(insertedTuit);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default (app) => {
  app.get("/api/tuits/reviews/:rid", findReviews);
};
