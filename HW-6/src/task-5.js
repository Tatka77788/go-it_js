import users from './users.js';

const getUserWithEmail = (users, email) => {
  return users
    .filter((user) => user.email === email)
    .map((user) => ( user.name )).join('\n');
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 