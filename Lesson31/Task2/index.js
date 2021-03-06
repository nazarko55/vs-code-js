const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

const getTasksList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(result => console.log(result))

};

function getTaskById(tasksId) {
  return fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${tasksId}`)
    .then(response => response.json())
    .then(result => console.log(result));
}
export { getTaskById };
export { getTasksList };