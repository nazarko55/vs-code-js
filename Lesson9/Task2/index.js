
function buildObject(keyList, valueList) {
  keyList.reduce((acc, curvalue) => {
    console.log(curvalue);
  }, {})
}

const keys = ['Name', 'age'];
const values = ['Denis', 1000];
buildObject(keys, values);