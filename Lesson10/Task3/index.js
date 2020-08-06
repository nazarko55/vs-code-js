const multiRound = function (num, len) {
  const res = Math.pow(10, len);

  return [
    Math.floor(num * res) / res,
    Math.round(num * res) / res,
    Math.ceil(num * res) / res,
    Math.trunc(num * res) / res,
    +num.toFixed(len)
  ];
};

console.log(multiRound(1.23, 5));