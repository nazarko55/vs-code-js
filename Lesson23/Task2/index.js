const tasks = [{
  text: 'Finished school',
  done: false,
  id: 1,
  createDate: new Date(2014, 9, 1, 0, 0, 0, 0),
  doneData: undefined,
},
{
  text: 'Wash car',
  done: false,
  id: 2,
  createDate: new Date(2015, 9, 1, 0, 0, 0, 0),
  doneDate: undefined,
},
{
  text: 'Learn English',
  done: false,
  id: 3,
  createDate: new Date(2016, 9, 1, 0, 0, 0, 0),
  doneDate: undefined,
},
{
  text: 'Buy laptop',
  done: true,
  id: 4,
  createDate: new Date(2017, 9, 1, 0, 0, 0, 0),
  doneDate: new Date(2018, 7, 12),
},
{
  text: 'Learn JavaScript',
  done: true,
  id: 5,
  createDate: new Date(2019, 9, 1, 0, 0, 0, 0),
  doneDate: new Date(2020, 2, 5),
},
];

const listElem = document.querySelector('.list');
const createBtn = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');

const renderList = listItems => {
  const listElem = document.querySelector('.list');
  const listItemsElem = listItems
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
  listElem.append(...listItemsElem);
};
renderList(tasks);

const checkthisDone = (event) => {
  const checkedEl = event.target;
  if (checkedEl.tagName !== 'INPUT') return;

  const getElId = tasks.find(elem => elem.id === +checkedEl.parentElement.dataset.id);
  getElId.done = checkedEl.checked;
  getElId.doneDate = new Date();

  listElem.innerHTML = '';
  renderList(tasks);
};

listElem.addEventListener('click', checkthisDone);

const createTaskBoard = () => {
  if (inputElem.value == '') return;

  tasks.push({
    id: tasks.length + 1,
    text: inputElem.value,
    done: false,
    createDate: new Date(),
    checkDate: undefined,
  });

  inputElem.value = '';

  listElem.innerHTML = '';
  renderList(tasks);
};
createBtn.addEventListener('click', createTaskBoard);
