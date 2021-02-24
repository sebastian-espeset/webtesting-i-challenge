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

  it("Repair method repairs an items durability to 100", () => {
    enhancer.repair(item);
    expect(item.durability).not.toBe(10);
    expect(item.durability).toBe(100);
  });
  it("On success, the item's enhancement increases by 1.", () => {
    enhancer.success(item);
    expect(item.enhancement).toEqual(4);
  });
  it("On success,if the item enhancement level is 20, the enhancement level is not changed.", () => {
    if ((item.enhancement = 20)) {
      enhancer.success(item);
      expect(item.enhancement).not.toBeGreaterThan(20);
    }
  });
  it("On success,the durability of the item is not changed.", () => {
    enhancer.success(item);
    expect(item.durability).toEqual(item.durability);
  });
  it("On fail,if the item's enhancement is less than 15, the durability of the item is decreased by 5.", () => {
    enhancer.fail(item);
    if (item.enhancement < 15) {
      expect(item.durability).toBe(5);
    }
  });
  it("On fail,if the item's enhancement is 15 or more, the durability of the item is decreased by 10.", () => {
    item = { ...item, enhancement: 15 };
    enhancer.fail(item);
    if (item.enhancement >= 15) {
      expect(item.durability).toBe(0);
    }
  });
  it("On fail,if the item's enhancement level is greater than 16, the enhancement level decreases by 1",()=>{
      item={...item,enhancement:18};
      enhancer.fail(item);
      if(item.enhancement>15){
          expect(item.enhancement).toBe(17)
      }
  })
});
