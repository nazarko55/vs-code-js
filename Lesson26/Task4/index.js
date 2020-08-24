const add3 = value => value + 3;
const mult2 = value => value * 2;
const div4 = value => value / 4;

export const compose = (...func) => value => {
  return func.reduce((acc, func) => func(acc), value);
};

const doEverything = compose(
  add3,
  mult2,
  div4,
);
//console.log(doEverything(2));