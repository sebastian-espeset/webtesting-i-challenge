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
  if(item.enhancement<20){
    let enhancedItem= { ...item,enhancement:item.enhancement+=1 };
    return enhancedItem;
  }else{
    let enhancedItem= { ...item};
    return enhancedItem;
  }
}
  
  

function fail(item) {
  return { ...item };
}

function repair(item) {
  let repairedItem= { ...item, durability:item.durability=100 };
  return repairedItem;
}

function get(item) {
  return { ...item };
}

