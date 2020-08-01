function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < client.length; i++) {
    if (clients[i] == client) {
      if (balances[i] - amount < 0) {
        return -1;
      }
      return balances[i] - amount;
    }
  }
}

console.log(withdraw(['Ann', 'John', 'Bob'], [1500, 600, 75], 'Bob', 35))
