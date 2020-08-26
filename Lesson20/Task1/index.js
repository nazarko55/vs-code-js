class Sportsman {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, style) {
    super(name);
    this.style = style;
  }
  text() {
    console.log(this);
  }
  swim() {
    console.log(`${this.name} is swimming ${this.style}`);
  }
}
//testing 

const spoortsmann = new Sportsman('Denis');
console.log(spoortsmann);
spoortsmann.run();

const swwimer1 = new Swimmer('Nazar', 'test style');
console.log(swwimer1);
swwimer1.text();
swwimer1.swim();


//claes vs object

obj1 = {
  name: 'Denis',
  run() {
    console.log(`${this.name} is runnung`);
  }
};
//console.log(obj1);