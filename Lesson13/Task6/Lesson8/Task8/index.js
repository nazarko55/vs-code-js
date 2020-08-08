export const withdraw = (arr, clients, balances, client, amount) => {
  if (Array.isArray(arr)) return null;
  const similar = clients.indexOf(client);
  console.log(clients.indexOf(client))
  console.log(balances[similar])
  const result = balances[similar] - amount;
  // console.log(result)
  if (result < 0) return -1;
  return result;
}

const dataClientNames = ['Kate', 'Venom', 'Rex', 'Alan'];
const dataClientBalances = [100, 50, 300, 5];

console.log(withdraw(dataClientNames, dataClientBalances, 'Venom', 50));