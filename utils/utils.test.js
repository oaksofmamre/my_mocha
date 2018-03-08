"use strict";

const expect = require("expect");
const utils = require("./utils");

describe("Utils", () => {
  it("should add 2 numbers", () => {
    let result = utils.add(3, 4);

    expect(result)
      .toBe(7)
      .toBeA("number");
  });
  it("should async add 2 numbers", done => {
    let result = utils.asyncAdd(7, 8, sum => {
      expect(sum)
        .toBe(15)
        .toBeA("number");
      done();
    });
  });
  it("should square a number", () => {
    let result = utils.square(3);
    expect(result)
      .toBe(9)
      .toBeA("number");
  });
  it("should async square a number", done => {
    let result = utils.asyncSquare(7, square => {
      expect(square)
        .toBe(49)
        .toBeA("number");
      done();
    });
  });
  it("should set firstname and lastname", () => {
    let user = { firstName: "", lastName: "", age: 21 };
    let result = utils.setName(user, "Charlie Brown");
    expect(result)
      .toBeAn("object")
      .toInclude({ firstName: "Charlie", lastName: "Brown" });
  });
});

// it("should expect some values", () => {
//   expect(12).toBe(12);
//   // the below check on object should fail for objects
//   expect({ word: "ocean" }).toBe({ word: "ocean" });
//   // thus use toEqual for object comparisons
//   expect({ word: "ocean" }).toEqual({ word: "ocean" });
//   // for arrays use toInclude()
//   expect([1, 2, 3]).toInclude(3);
//   expect({ name: "dan", age: 21, address: "123 Main St" }).toInclude({
//     age: 21
//   });
// });
