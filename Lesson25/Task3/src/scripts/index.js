import { renderListItems } from './renderListItems.js';
import { createTask, listElem } from './create.js';
import { checkIfDone } from './checkitems.js';
import { getItem } from './storage.js';
import { onStorageChange } from './storage.js';

const crtBtnElem = document.querySelector('.create-task-btn');

document.addEventListener('DOMContentLoaded', () => {
  renderListItems(getItem('tasksList'));
})
listElem.addEventListener('click', checkIfDone);
crtBtnElem.addEventListener('click', createTask);
window.addEventListener('storage', onStorageChange);