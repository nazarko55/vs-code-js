const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']; \

export const DayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};
