const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

const activeUser = defaultUserName;
const hasAccess = isLoggedIn;
const isTruthy = !isAdmin;
const isFalsy = isAdmin;
const isNotTrue = !isLoggedIn;
const isTrue = !isAdmin;




console.log(activeUser);
console.log(hasAccess);
console.log(isTruthy);
console.log(isFalsy);
console.log(isNotTrue);
console.log(isTrue);