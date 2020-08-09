export const createMessenger = () => {

  let message = 'Just learn it';

  function sendMessage(name) {
    const sender = 'Gromcode';

    console.log(`${name}, ${message}! Your ${sender}`);
  };

  function setMessage(text) {
    message = text;
  };

  function setSender(text) {
    message = text;
  };

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

const messenger = createMessenger();

messenger.sendMessage('Bob');
