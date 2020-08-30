const servers = [
  'https://server.com/us',
  'https://server.com/eu',
  'https://server.com/au',
];

const request = url => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      userData: {
        name: 'Tom',
        age: 17,
      },
      source: url
    });
  }, Math.random() * 3000 + 1000);

});


const getUserASAP = userId => {
  const userUrls = servers
    .map(serverUrl => `${serverUrl}/${userId}`);
  console.log(userUrls);
  const requests = userUrls
    .map(userUrl => request(userUrl));
  console.log(userUrls);

  return Promise.race(requests);
};
export { getUserASAP };
