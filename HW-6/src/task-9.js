import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  return users
    .sort(function(a, b) {
      return a.friends - b.friends;
    })
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
