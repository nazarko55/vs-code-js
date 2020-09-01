import { renderList } from './render.js';
import { tasks } from './storage.js';
import { createTaskBoard, checkThisDone } from './getway.js';

renderList(tasks);

const listElem = document.querySelector('.list');
listElem.addEventListener('click', checkthisDone);
createBtn.addEventListener('click', createTaskBoard);
