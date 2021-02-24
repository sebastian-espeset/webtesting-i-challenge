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
    expect(item.durability).not.toBe(10);
    expect(item.durability).toBe(100);
  });
  it("success method increases enchantment by 1",()=>{
      enhancer.success(item);
      expect(item.enhancement).toEqual(4)
  })
  it("if enhancement level is max, does not increase",()=>{
    if(item.enhancement=20){
        enhancer.success(item)
        expect(item.enhancement).not.toBeGreaterThan(20);
    }  
  })
});
