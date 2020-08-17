const eventToCheckbox = document.querySelector('.task-status');
const chekedBoxValue = (event) => {
  console.log(event.target.checked);
};
eventToCheckbox.addEventListener('change', chekedBoxValue);