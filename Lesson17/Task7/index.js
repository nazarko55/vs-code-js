export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  },
  setFullName(str) {
    let arr = str.split(' ');
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
};
