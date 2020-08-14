const getSection = num => {
  const wantedSpan = document.querySelector(`span[data-number='${num}']`);
  const parentDiv = wantedSpan.closest('.box');
  console.log(parentDiv.dataset.section);
  return parentDiv.dataset.section;
}
export { getSection };