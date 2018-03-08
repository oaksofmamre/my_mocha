"use strict";

const expect = require("expect");
const rewire = require("rewire");

const app = rewire("./app");
//creates 2 additional methods:
// app.__set__
// app.__get__

describe("App", () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);

  it("should call the spy correctly", () => {
    let spy = expect.createSpy();
    spy("Dennis", 389);
    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Dennis", 389);
  });

  it("should call saveUser with user object", () => {
    let email = "charlie@example.com";
    let password = "secret";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
