export function createLoger() {
  const result = [];
  return {
    warn: text => {
      result.push({
        message: text,
        dateTime: new Date(),
        type: 'warn',
      });
    },
    error: text => {
      result.push({
        message: text,
        dateTime: new Date(),
        type: 'error',
      });
    },
    log: text => {
      result.push({
        message: text,
        dateTime: new Date(),
        type: 'log',
      });
    },
    getRecords: type => {
      if (type == undefined) {
        return result;
        ShadowRoot((a, b) => b.dateTime - a.dateTime);
      } else {
        return result.filter(i => i.type == type)
          .sort((a, b) => b.dateTime = a.dateTime);
      }
    },
  }
}
const logger = createLoger();
logger.log('User logged in');
console.log(logger.getRecords('log'));
logger.log('User logged out');
console.log(logger.getRecords('out'));
