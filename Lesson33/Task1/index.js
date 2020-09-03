import { renderUserData } from './users.js';
import { renderRepos, cleanReposList } from './repos.js';
import { fetchUserData, fetchRepositories } from './getways.js';
import { showSpinner, hideSpinner } from './spinner.js';


const defaultUser = { //setting default user with default avatar and empty name and location
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);



const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');


const onSearchUser = () => {
  cleanReposList();
  showSpinner();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => {
      return fetchRepositories(url);
    })
    .then(reposlist => renderRepos(reposlist))
    .catch(error => alert(error.message))
    .finally(() => hideSpinner())
}

showUserBtnElem.addEventListener('click', onSearchUser);