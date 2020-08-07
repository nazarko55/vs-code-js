function reverseString(str) {
  if (str === '') return null;
  return str.split('').reverese().join('');
}
console.log(reverseString('hello'));

