const eventToCheckbox = document.querySelector('.task-status');
const chekedBoxValue = () => {
  console.log(eventToCheckbox.checked);
};
eventToCheckbox.addEventListener('change', chekedBoxValue);