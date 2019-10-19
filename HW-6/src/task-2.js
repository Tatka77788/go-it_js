import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
  //.map(user=> user.name);
};

console.log(getUsersWithEyeColor(users, 'blue'));

