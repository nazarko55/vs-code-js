const eventPaginationBtn = document.querySelectorAll('.pagination__page');
const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};
[...eventPaginationBtn].map((elem) => elem.addEventListener('click', handleClick));
