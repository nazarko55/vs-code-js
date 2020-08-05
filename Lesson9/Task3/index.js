const rooms = {
  room1: [
    { name: 'room1 name1' },
    { name: 'room1 name2' },
    { name: 'room1 name3' },
    { name: 'room1 name4' },
  ],
  room2: [
    { name: 'room2 name1' },
    { name: 'room2 name2' },
    { name: 'room2 name3' },
    { name: 'room2 name4' },
  ],
  room3: [
    { name: 'room3 name1' },
    { name: 'room3 name2' },
    { name: 'room3 name3' },
    { name: 'room3 name4' },
  ],
  room4: [
    { name: 'room4 name1' },
    { name: 'room4 name2' },
    { name: 'room4 name3' },
    { name: 'room4 name4' },
  ],

}

const getPeople = obj => Object.values(obj).flat().map(obj => Object.values(obj)).flat();
const result = getPeople(rooms)
console.log(result);
console.log(rooms);