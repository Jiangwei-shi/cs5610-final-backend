import reviewModel from "./review-model.js";

export const getAllReviews = async (resultId) => {
  try {
    const reviews = await reviewModel.find({ result_id: resultId });
    return reviews;
  } catch (error) {
    console.error("Error while getting reviews: ", error);
  }
};

export const createReview = (review) => reviewModel.create(review);
