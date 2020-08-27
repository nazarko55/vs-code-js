

const btn = document.querySelectorAll('.btn');
//btn, forEach(btn => {
// const obj = {
//  name: 'Some user',
//}
btn.addEventListener('click', handkerBtnClick.bind(obj));
});

function handkerBtnClick(event) {
  //console.log(this);
  //console.log(`Hello ${this.name}`);
  console.log(event.target.textContent);
}


