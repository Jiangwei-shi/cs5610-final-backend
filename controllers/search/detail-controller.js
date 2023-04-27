import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const url = `https://api.yelp.com/v3/businesses/${id}`;
  const apiKey =
    "prLDauauxY3xQ7O-tzuE3hhT50vgWPmU14vDS9UO9ql3CNEKme_18DRi4qGw-cxFNBXh5Ad5QUYYv_lz2fs5VngjhkJMlplSB9_ZehHxFRaKJNWxnXqrdpFDEUBEZHYx";

  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.get(url, options);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(error.response.status).json({ error: error.message });
  }
});

export default function (app) {
  app.use("/api/tuits", router);
}
