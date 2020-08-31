import { tasks } from "./storage";

const listElem = document.querySelector('.list');

export const renderList = tasks => {
  const listItemsElem = tasks
    .sort((a, b) => sortTasks(a, b))
    .map(task => createListElem(task));

  listElem.append(...listItemsElem);

  // input obj,
  //putput DOMeLEMENT

  const sortEl = (a, b) => {
  .sort((a, b) => {
    if (a.done - b.done !== 0) return a.done - b.done;
    if (a.done && b.done)
      return (new Date(b.doneDate) - new Date(a.doneDate));
    if (!a.done && !b.done)
      return (new Date(b.createDate) - new Date(a.createDate));
  })
}

const createLi = () => {
  .map((task) => {
  const listItemElem = document.createElement('li');

  listItemElem.classList.add('list__item');
  listItemElem.dataset.id = `${task.id}`;

  const checkboxItem = document.createElement('input');
  checkboxItem.setAttribute('type', 'checkbox');
  checkboxItem.checked = done;

  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  checkboxItem.classList.add('list__item-checkbox');
  listItemElem.append(checkboxItem, text);
  return listItemElem;
});