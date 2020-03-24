import users from "./users.js";
("use strict");

// Получить массив имен всех пользователей (поле name).
// const names = members.map(member => member.name);
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
