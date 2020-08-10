export function createCalculator() {
  let memory = 0;

  const add = num => {
    memory += num;
  }
  const decrease = num => {
    memory -= num;
  }

  const reset = () => {
    memory = 0;
  }

  const getMemo = () => {
    return memory;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  }
}

const calculators = createCalculator();
calculators.add(100);
console.log(calculators.getMemo());