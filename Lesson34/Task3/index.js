const fetchUsers = users => {
  return users.map(async userId => {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.ok) {
      const user = await response.json();
      return user.blog;
    }
    throw new Error('Failed to load data')
  });
}

const getUsersBlogs = usersArr => {
  try {
    return Promise.all(fetchUsers(usersArr));
  } catch (err) {
    console.log(err);
  }
};

export { getUsersBlogs };