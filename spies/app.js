"use strict";

let db = require("./db");

// const app = rewire("./app");

const handleSignup = (email, password) => {
  //check if meail already exists
  //save user
  db.saveUser({ email, password });
  //send welcome email
};

module.exports = { handleSignup };
