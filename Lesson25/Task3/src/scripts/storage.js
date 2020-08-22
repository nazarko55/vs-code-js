import { todoList } from './todoList.js';

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => {
  if (localStorage.getItem(key) === null) {
    setItem('tasksList', todoList);
  }
  return JSON.parse(localStorage.getItem(key))
};

export const onStorageChange = event => {
  if (event.key !== "tasksList") {
    return;
  }
  setItem('tasksList', getItem('tasksList'));

};