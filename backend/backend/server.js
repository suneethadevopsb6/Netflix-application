const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");

const app = express();
app.use(cors());

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
