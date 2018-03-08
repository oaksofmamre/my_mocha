"use strict";

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // res.status(200).send("basic content");
  res.status(404).send({ error: "file not found", appName: "biggie" });
});

app.get("/users", (req, res) => {
  res
    .status(200)
    .send([
      { name: "matthew", age: 10 },
      { name: "mark", age: 20 },
      { name: "luke", age: 30 },
      { name: "dennis", age: 40 }
    ]);
});

app.listen(3000, () => {
  console.log("Server listening on localhost:3000");
});

module.exports = { app };
