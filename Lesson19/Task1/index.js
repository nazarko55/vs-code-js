export const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);

  },
};


export const ship = {
  name: 'Argo',
  hasWheels: false,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stopMachine() {
    ship.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle // vehicle now is a prototype for obj ship
  //ship can now use parental methods from vehicle
};

// Object.setPrototypeOf(ship, vehicle);
ship.startMachine();
ship.stopMachine();
// ship.run(); //looking for nonexisting method => return error;