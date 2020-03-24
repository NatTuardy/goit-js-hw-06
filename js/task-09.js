import users from "./users.js";
("use strict");

// Массив имен (поле name) людей,
// отсортированных в зависимости от количества
//  их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  const sorted = users.sort((a, b) => a.friends.length - b.friends.length);
  return sorted.map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
