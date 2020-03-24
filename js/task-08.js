import users from "./users.js";
("use strict");

// Массив имен всех пользователей у которых
//  есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const usersFriend = users.filter(item => item.friends.includes(friendName));
  return usersFriend.map(user => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
