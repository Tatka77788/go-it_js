import users from './users.js';

//console.log(users.length);

const getUserNames = users => {
  return users.map(({ name }) => name);
};
console.log(getUserNames(users));
