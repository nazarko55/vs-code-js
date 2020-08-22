import { listElem } from './create.js';

export const renderListItems = listItems => {

  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .sort((a, b) => {
      if (a.done - b.done !== 0) return a.done - b.done;
      if (a.done && b.done)
        return (new Date(b.doneDate) - new Date(a.doneDate));
      if (!a.done && !b.done)
        return (new Date(b.createDate) - new Date(a.createDate));
    })
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.dataset.id = `${id}`;

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
  listElem.append(...listItemsElems);

};