const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (errror) {
    throw new Error('Failed to fetch user');
  }

};

fetchUser('facebook')
  .then(userData => console.log(userData))
  .catch(err => alert(err.message));

export { fetchUser };