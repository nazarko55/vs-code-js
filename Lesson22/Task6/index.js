const addEventSingleBtn = document.querySelector('.single-use-btn');
const clickEvent = () => {
  console.log('clicked');
  addEventSingleBtn.removeEventListener('click', clickEvent);
};
addEventSingleBtn.addEventListener('click', clickEvent);