
const calc = initialVal => {
  let result = initialVal;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    substract(value) {
      result -= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    }
  };
  return calculator;
};


const result = calc(10).add(2).mult(5).div(3).substract(5).result();
console.log(result);
export { calc };