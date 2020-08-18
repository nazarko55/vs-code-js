const generateNumbersRange = (seatsQuantity) => {
  const seats = [];
  for (let i = 1; i <= seatsQuantity; i++) {
    seats.push(i);
  }
  return seats;
};

const getLineSeats = () => generateNumbersRange(10)
  .map(seatNumber => ` 
  <div 
  class="sector__seat" 
  data-seat-number = "${seatNumber}"
  ></div>`).join('');

const getSectorLines = () => {
  const seatsString = getLineSeats();
  return generateNumbersRange(10)
    .map(lineNumber => ` 
  <div 
  class="sector__line" 
  data-line-number = "${lineNumber}"
  >${seatsString}</div>
  `).join('');
};