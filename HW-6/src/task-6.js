import users from './users.js';

const getUsersWithAge = (users, min, max) =>
  users
    .filter(user => user.age >= min && user.age < max)
    .map(user => user.name);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
