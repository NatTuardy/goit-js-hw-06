import users from "./users.js";
("use strict");

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// const getUserNames = users => users.map(user => user.name);
const getUsersWithEyeColor = (users, color) => {
  return users.filter(item => item.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
