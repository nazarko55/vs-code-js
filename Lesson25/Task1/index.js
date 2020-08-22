localStorage.setItem('name', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('hobbies', 'Football');
localStorage.setItem('age', JSON.stringify(17));




export const getLocalStorageData = () => {
  return Object.entries(localStorage)
    .reduce((acc, [key, value]) => {
      let newValue;
      try {
        newValue = JSON.parse(value);
      } catch (e) {
        newValue = value;
      }
      return {
        ...acc,
        [key]: newValue,
      };
    }, {});
}
console.log(getLocalStorageData());