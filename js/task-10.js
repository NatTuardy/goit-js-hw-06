import users from "./users.js";
("use strict");

// Получить массив всех умений всех пользователей
// (поле skills), при этом не должно быть повторяющихся
// умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   const skillsUsers = users.reduce((accum, users) => {
//     !accum.includes(...users.skills) && accum.push(...users.skills);
//     return accum;
//   }, []);
//   return skillsUsers.sort();
//   //   return Object.fromEntries(skillsUsers).sort();
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// const getSortedUniqueSkills = users => {
//   const getSkills = users.map(user => user.skills);
//   console.log(...getSkills);
// };

// console.log(getSortedUniqueSkills(users));
// ======================================================
// const getSortedUniqueSkills = users => {
//   const result = users.map(user => user.skills);
//   const result2 = result.reduce((accum, items) => [...accum, ...items], []);
//   const result3 = result2.reduce((accum, items) => {
//     !accum.includes(items) && accum.push(items);
//     return accum;
//   }, []);
//   return result3.sort();
// };

// console.log(getSortedUniqueSkills(users));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const getSortedUniqueSkills = users => {
  const result = users
    .map(user => user.skills)
    .reduce((accum, items) => [...accum, ...items], [])
    .reduce((accum, items) => {
      !accum.includes(items) && accum.push(items);
      return accum;
    }, []);
  return result.sort();
};

console.log(getSortedUniqueSkills(users));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const getSortedUniqueSkills = users => {
//   const result = users
//     .map(user => user.skills)
//     .reduce((accum, items) => [...accum, ...items], [])
//     .map(items => !result.includes(items) && result.push(items));

//   return result.sort();
// };

// console.log(getSortedUniqueSkills(users));
