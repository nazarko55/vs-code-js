import { renderList } from './render.js';
import { tasks } from './storage.js';
import { createTask, updateTask } from './getway.js';

renderList(tasks);

const listElem = document.querySelector('.list');
listElem.addEventListener('click', checkThisDone);
createBtn.addEventListener('click', createTaskBoard);
