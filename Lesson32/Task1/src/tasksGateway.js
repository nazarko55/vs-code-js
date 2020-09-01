const baseUrl = 'https://crudcrud.com/api/5c526d0e9c184d4f96081f80ee7a1237/tasks';


getTaskList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
}

const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  })
}