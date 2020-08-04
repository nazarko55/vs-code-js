const buildObject = (keysList, valuesList) => {
  return keysList.reduce((result, num, i) =>
    ({ ...result, [num]: valuesList[i] }), {});
}

const keysList = ['name', 'surname', 'age'];
const valuesList = ['Nazar', 'ko', 20];
const result = buildObject(keysList, valuesList);
console.log(result);