export const event = {
  message: 'Welcome to the party',
  guests: [
    { name: 'John', age: 17, email: 'examplea@server.com' },
    { name: 'Derek', age: 19, email: 'exampleb@server.com' },
    { name: 'Bill', age: 21, email: 'examplec@server.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`
      }));
  }
}
console.log(event.getInvitations());