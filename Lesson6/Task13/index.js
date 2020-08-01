var myarray = [25, 8, 7, 41];

function sortAsc(array) {
  if (!Array.isArray(array)) return null;
  array.sort(function (a, b) {
    return a - b;
  })
  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) return null;
  array.sort(function (a, b) {
    return b - a;
  })
  return array;
}

console.log(sortAsc(myarray));
console.log(sortDesc(myarray));