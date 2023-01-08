import express from "express";
const app = express();
const port = 3000;

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
