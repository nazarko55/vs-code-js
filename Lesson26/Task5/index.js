const shmoment = initValue => {
  let actualDate = new Date(initValue);
  console.log(actualDate);
  const calculator = {
    add(digit, value) {
      let timeIncrease = {
        milliseconds: (value) => (actualDate.setMilliseconds(actualDate.getMilliseconds() + value)),
        seconds: (value) => (actualDate.setSeconds(actualDate.getSeconds() + value)),
        minutes: (value) => (actualDate.setMinutes(actualDate.getMinutes() + value)),
        hours: (value) => (actualDate.setHours(actualDate.getHours() + value)),
        days: (value) => (actualDate.setDate(actualDate.getDate() + value)),
        months: (value) => (actualDate.setMonth(actualDate.getMonth() + value)),
        years: (value) => (actualDate.setFullYear(actualDate.getFullYear() + value)),
      }
      actualDate = new Date(timeIncrease[digit](value));
      return calculator;
    },
    subtract(digit, value) {
      let timeDecrease = {
        milliseconds: (value) => (actualDate.setMilliseconds(actualDate.getMilliseconds() - value)),
        seconds: (value) => (actualDate.setSeconds(actualDate.getSeconds() - value)),
        minutes: (value) => (actualDate.setMinutes(actualDate.getMinutes() - value)),
        hours: (value) => (actualDate.setHours(actualDate.getHours() - value)),
        days: (value) => (actualDate.setDate(actualDate.getDate() - value)),
        months: (value) => (actualDate.setMonth(actualDate.getMonth() - value)),
        years: (value) => (actualDate.setFullYear(actualDate.getFullYear() - value)),
      }
      actualDate = new Date(timeDecrease[digit](value));
      return calculator;
    },
    result() {
      return actualDate;
    },

  };
  return calculator;
};

//console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 17).result());
export { shmoment };