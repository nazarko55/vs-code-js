//'use strict';
function printMessage(age, city) {
  console.log(this);
  console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`);
}
let user = {
  name: "Alex",
  email: "gmail.com",
}

//1

printMessage(100, 'Lviv');

//const printMessageDinded = printMessage.bind(user);

//printMessageDinded(100, 'Lviv');

//printMessage.bind(user, 100, 'Lviv');


const myBind = (func, context, ...ragss) => {
  console.log('step 1');
  return function () {
    console.log('step 2');
    return func.call(context, ...ragss);
  }
}

const printMessageDinded = myBind(printMessage, user, 200, 'Lviv');
printMessageDinded();


const myBind1 = (func, context, ...ragss) => {
  console.log('step 1');
  return function (...targetArgs) {
    console.log('step 2');
    return func.call(context, ...ragss, ...targetArgs);
  }
}

const printMessageDinded1 = myBind1(printMessage, user);
printMessageDinded1(200, 'Kiev');


const printMessageDinded2 = myBind2(printMessage, user, 200);
printMessageDinded2('Kharkiv');



const mySuperBind1 = (func, context, ...ragss) => {
  return function () {

    console.log('context');
    context.tempFunction = func;

    console.log(context);
    context.tempFunction(...ragss);
  }
}
}

const printMessageDinded3 = mySuperBind1(printMessage, user, 50, 'dnipro');
printMessageDinded3();
