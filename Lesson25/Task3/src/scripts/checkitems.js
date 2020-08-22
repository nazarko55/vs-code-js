import { renderListItems } from './renderListItems.js';
import { listElem } from './create.js';
import { setItem, getItem, onStorageChange } from './storage.js';

export const checkIfDone = (event) => {
  const checkedElem = event.target;
  if (checkedElem.tagName != 'INPUT') return;
  const tasks = getItem('tasksList');
  const getId = tasks.find(elem => elem.id === +checkedElem.parentElement.dataset.id);
  getId.done = checkedElem.checked;
  getId.doneDate = getId.done ? new Date() : undefined;

  listElem.innerHTML = '';
  setItem('tasksList', tasks);
  console.log(getItem('tasksList'));
  renderListItems(tasks);
};