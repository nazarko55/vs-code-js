const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

export default user;

console.log(user.fullName);
user.fullName = 'Tom Hardy';
console.log(user.fullName);
user.fullName = 'James Sallivan';
console.log(user.firstName);
