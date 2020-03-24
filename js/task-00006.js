"use strict";

// const pureMultiply = (array, value) => {
//   const result = [];
//   console.log(result);
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(array[i] * 2);
//   }

//   return result;
// };
// console.log(pureMultiply);

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]

// // Функция вернула новый массив с измененными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 2

// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

// // Функциональный forEach
// numbers.forEach(num => console.log(num));

// // Указываем параметр idx если нужен доступ к счетчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// const myFamily = ["Nata", "Valik", "Gleb", "Ulya"];

// myFamily.forEach((member, index) =>
//   console.log(`index ${index},member ${member}`)
// );

// 3

// const myFamily = ["Nata", "Valik", "Gleb", "Ulya"];

// const myBigFamily = myFamily.map(member => "Big " + member);
// console.log(myBigFamily);

// const members = [
//   { name: "Nata", isActive: true },
//   { name: "Valik", isActive: false },
//   { name: "Gleb", isActive: true },
//   { name: "Ulya", isActive: true }
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = members.map(member => member.name);

// console.log(names);

// 4

// const users = [
//   { name: "Nata", isActive: true },
//   { name: "Valik", isActive: false },
//   { name: "Gleb", isActive: true },
//   { name: "Ulya", isActive: true }
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// 5 не поняла функцию!!!!!

// const users = [
//   { id: "000", name: "Mango", isActive: true },
//   { id: "001", name: "Poly", isActive: false },
//   { id: "002", name: "Ajax", isActive: true },
//   { id: "003", name: "Chelsey", isActive: false }
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === "002");
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, "001"));
// console.log(getUserById(users, "003"));

// 6

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }
// ];

// // Пройдем по всем элементам коллекции и добавим значения свойства tags
// // к аккумулятору, начальное значение которого укажем пустым массивом [].
// // На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// // для сбора тегов из коллекции
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// ++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++

/*
 * 1
 */
// Код ниже получает из массива строк новый массив,
//  содержащий их длины:
const arr = ["Есть", "жизнь", "на", "Марсе"];

const arrLength = arr.map(item => item.length);

console.log(arrLength); // [4, 5, 2, 5]

/*
 * 2
 */
// Найти объект с id=2
const users1 = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" }
];

// Ваш код (логику засовываем в функцию)
const userFind = (users1, id) => {
  return users1.find(item => item.id === id);
};

console.log(userFind(users1, 2)); // { id: 2, name: "Петя" }

/*
 * 3
 */
// Вернуть только массив первых вдух объектов
const users2 = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" }
];

// Ваш код (логику засовываем в функцию)
// const fn3 = array => array.filter((user, idx) => idx < 2);
const doubleUsers = users2 => users2.filter((users2, indx) => indx < 2);

console.log(doubleUsers(users2)); // [{ id: 1, name: "Вася" }, { id: 2, name: "Петя" }]

/*
 * 4
 */
// Вернуть только массив без объекто у которого id === 2
const users3 = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" }
];

const withoutUser = (users3, id) => {
  return users3.filter(item => item.id !== 2);
};

console.log(withoutUser(users3, 2)); // [{ id: 1, name: "Вася" }, { id: 3, name: "Маша" }]

/*
 * 5
 */
// Произвести общий подсчет кроме чисел которые идут
// под четными индексами массива
const nums = [10, 20, 30, 40, 50];

// Ваш код (логику засовываем в функцию)
const sumNamber = nams => {
  return nums.reduce((accum, item, idx) => {
    if (idx % 2 !== 0) {
      accum += item;
    }
    return accum;
  }, 0);
};
console.log(sumNamber(nums)); // 90

/*
 * 6
 */
// Вернуть массив в котором будут персонажи
// которые родились с 1850 года и прожили 80 или больше лет
const scientist = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909
  }
];

const findPerson = (array, years, age) => {
  return array.filter(({ year, passed }) => {
    return year >= years && passed - year >= age;
  });
};

console.log(findPerson(scientist, 1850, 80));

// +++++++++++++++++++++++++++++++++++++++

/*
 * 7
 */
// Подщитать общее количество проживших лет персонажей

const fn7 = array => {
  return array.reduce((accum, { year, passed }) => {
    return (accum += passed - year);
  }, 0);
};

console.log(fn7(scientist));
