const express = require("express");
const cors = require("cors");
const app = express();
const port = 50;

app.use(cors());

app.get("/posts", (req, res) => {
  console.log(req, res);
  const data = require("./data/posts.json");
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
