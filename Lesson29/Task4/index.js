export const delay = delayTime => new Promise(resolve => setTimeout(() => resolve(), delayTime))
  .then(() => console.log('Done'));
//delay(2000)

