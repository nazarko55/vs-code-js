export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((a) => a.name);
  }
  getUserIds() {
    return this._users.map((a) => a.id);
  }
  getUserNameById(id) {
    for (let i of this._users) {
      if (i.id === id)
        return i.name;
    }
  }

}
const newUser = new User('333', 'Max', '1234');
const newUser1 = new User('444', 'Tom', '5678');
console.log(newUser);
console.log(newUser1);
const users1 = new UserRepository([{ id: 123, name: 'Max' }, { id: 456, name: 'Tom' }, { id: 789, name: 'Bob' }])
console.log(users1);