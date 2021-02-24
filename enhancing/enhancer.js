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
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability:item.durability=100 };
}

function get(item) {
  return { ...item };
}

