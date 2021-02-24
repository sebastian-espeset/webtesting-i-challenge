const enhancer = require("./enhancer.js");

it("is sane", () => {
  expect(3).toBe(3);
});

describe("enhancer item methods", () => {
  let item;
  beforeEach(() => {
    item = {
      name: "",
      durability: 10,
      enhancement: 3,
    };
  });

  it("enhancer exists", () => {
    expect(enhancer).toBeDefined();
  });

  it("enhancer repairs an items durability to 100", () => {
    enhancer.repair(item);
    expect(item.durability).toBe(100);
  });
});
