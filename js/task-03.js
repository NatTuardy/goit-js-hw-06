import users from "./users.js";
("use strict");

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  const male = users.filter(item => item.gender === gender);
  return male.map(user => user.name);
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
