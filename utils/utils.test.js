"use strict";

const expect = require("expect");
const utils = require("./utils");

it("should add 2 numbers", () => {
  let result = utils.add(3, 4);

  expect(result)
    .toBe(7)
    .toBeA("number");
  // if (result !== 7) {
  //   throw new Error(`Expected 7 but got back ${result}`);
  // }
});

it("should square a number", () => {
  let result = utils.square(3);
  expect(result)
    .toBe(9)
    .toBeA("number");
  // if (result !== 9) {
  //   throw new Error(`Expected 9 but got back ${result}`);
  // }
});
