const timer = {
  secondPased: 0,
  minsTimer: 0,
  startTimer() {
    const adder = function () {
      console.log(this);

      this.secondPased += 1;
    };

    const adderBinded = adder.bind(this);
    setInterval(adder, 1000);
  },

  startTimer() {
    setInterval(() => {
      console.log(this);

      this.secondPased += 1;
    }, 1000);
  }

  stopTimer() {

  },

  getTime() {

  },

  rest() {

  }
}

setTimeout(() => {
  console.log('hello');
}, 2000);

setInterval(() => {
  console.log('privet');
}, 5000);

const user = {
  name: 'Test',
  run() {
    console.log(this);
  }
}

user.run();


function printer(func) {
  console.log('i am runing');
  func();
}

const func = user.run;
printer(func);