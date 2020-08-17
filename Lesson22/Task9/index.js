const eventToCheckbox = document.querySelector('.task-status');
const chekedBoxValue = () => {
  console.log(event.target.checked);
};
eventToCheckbox.addEventListener('change', chekedBoxValue);