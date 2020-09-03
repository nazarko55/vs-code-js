const listElem = document.querySelector('.repo-list')

export const cleanReposList = () => {
  listElem.innerHTML = '';
}

export const renderRepos = reposlist => {
  const reposListElems = reposlist
    .map(({ name }) => {
      const listElem = document.createElement('li');
      listElem.classList.add('repo-list__item');
      listElem.textContent = name;
      return listElem;
    });
  listElem.append(...reposListElems);
}