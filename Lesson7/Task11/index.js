const filterNames = (arr, text) => {
  // return arr.filter(name => (name.length > 5) && (name === text))
  return arr.filter(el => el.indexOf(text) !== -1 && el.length > 5);
};

console.log(filterNames(['Roman', 'Nick', 'Samuel', 'Emmanuel', 'Alexandra'], 'an'));