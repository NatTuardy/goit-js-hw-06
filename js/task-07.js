import users from "./users.js";
("use strict");

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  return users.reduce((acc, item) => {
    acc += item.balance;

    return acc;
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916
