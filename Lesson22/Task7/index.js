const eventBtn = document.querySelectorAll('.btn');
const handleClick = (event) => {
  console.log(event.target.textContent);
}
[...eventBtn].map(el => el.addEventListener('click', handleClick));