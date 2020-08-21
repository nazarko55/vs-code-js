const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']; \

const DayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};

export { DayOfWeek };