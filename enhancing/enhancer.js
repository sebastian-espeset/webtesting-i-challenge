module.exports = {
  success,
  fail,
  repair,
  get,
};

// const item={
//   name:"",
//   durability:100,
//   enhancement:20
// }

function success(item) {
  if (item.enhancement < 20) {
    let enhancedItem = { ...item, enhancement: (item.enhancement += 1) };
    return enhancedItem;
  } else {
    let enhancedItem = { ...item };
    return enhancedItem;
  }
}

function fail(item) {
  if(item.enhancement<15){
    let failItem = {...item,durability:(item.durability-=5)};
    return failItem;
  }else if(item.enhancement<15){
    let failItem = { ...item, durability:(item.durability-=10)}
    return failItem;
  }else{
    let failItem= {
      ...item, 
      durability:(item.durability-=10),
      enhancement:(item.enhancement-=1)
    }
    return failItem;
  }
  
}

function repair(item) {
  let repairedItem = { ...item, durability: (item.durability = 100) };
  return repairedItem;
}

function get(item) {
  return { ...item };
}
