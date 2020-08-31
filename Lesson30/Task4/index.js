const promiseNumber1 = Promise.reject(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создайте промис и присвойте переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */
const promissse = (...numbers) => Promise.allSettled(numbers);
const resultPromise = promissse(promiseNumber1, promiseNumber2, promiseNumber3);

resultPromise
  .then((numbersList) => {
    console.log(numbersList);
    const sum = numbersList.reduce((acc, num) => acc + num, 0);
    return sum;
  })
  .then((result) => {
    console.log(result); // 98
  });

export { resultPromise };