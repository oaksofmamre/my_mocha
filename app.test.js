const request = require("supertest");
const expect = require("expect");

const app = require("./app").app;

describe("App", () => {
  describe("GET /", () => {
    it("should return response", done => {
      request(app)
        .get("/")
        .expect(404)
        // .expect("basic content")
        // .expect({ error: "file not found" })
        .expect(res => {
          expect(res.body).toInclude({ error: "file not found" });
        })
        .end(done);
    });
  });

  describe("GET /users", () => {
    it("should return a particular user from /users", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({ name: "dennis", age: 40 });
        })
        .end(done);
    });
  });
});
