import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.some(element => element === friendName))
    .map(user => user.name);
};
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
