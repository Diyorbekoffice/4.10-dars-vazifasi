// ______________________/ String metodlariga oid masalalar \______________________

// // 1-masala
// let str = 'banana';
// function identify(arg) {
//     let arr = arg.split('').filter(num => num === 'a').length;
//     return arr;
// }
// let res = identify(str);
// console.log(res);


// // 2-masala
// let str = 'banana';
// function cutting(arg) {
//     let arr = arg.slice(arg.length - 3);
//     return arr;
// }
// let res = cutting(str);
// console.log(res);

// // 3-masala
// let str = 'hello world';
// function upperCase(arg) {
//     let arr = arg.split(' ').map(num => num[0].toUpperCase() + num.slice(1)).join(' ');
//     return arr;
// }
// let res = upperCase(str);
// console.log(res);

// // 4-masala
// let str = 'hello world';
// function cuttingSpace(arg) {
//     let arr = str.split(' ').join('');
//     return arr;
// }
// let res = cuttingSpace(str);
// console.log(res);

// // 5-masala
// let str = 'banana';
// function reverseStr(arg) {
//     let arr = arg.split('').reverse().join('');
//         return arr;
// }
// let res = reverseStr(str);
// console.log(res);

// // 6-masala
// let str = 'hello world';
// function strSum(arg) {
//     let arr = arg.split('').length;
//     return arr;
// }
// let res = strSum(str);
// console.log(res);

// // 7-masala
// let str = 'banana';
// function repeatStr(arg) {
//     let arr = arg.repeat(3);
//     return arr;
// }
// let res = repeatStr(str);
// console.log(res);

// // 8-masala
// let str = 'h0e1l2l3o w4o5r6l7d';
// function numberExtraction(arg) {
//     let arr = arg.split('').filter(num => num !== ' ');
//     return arr.filter(num => num >=0 || num < 0).join('');
// }
// let res = numberExtraction(str);
// console.log(res);

// // 9-masala
// let str = 'hello world';
// function firstWord(arg) {
//     let arr = arg.split(' ').slice(0, 1).join('');
//     return arr;
// }
// let res = firstWord(str);
// console.log(res);

// // 10-masala
// let str = 'Bugungi darsda js metodlarini organamiz';
// function sreachStr(arg) {
//     let arr = arg.toLowerCase().includes('js');
//     return arr;
// }
// let res = sreachStr(str);
// console.log(res);


// ______________________/ String metodlariga oid masalalar \______________________
// // 1-masala
// let array = [1, 2, 3, 4, 5, 6];
// function maxNum(arg) {
//     let count = 0;
//     for (const i of arg) {
//         if (count < arg[i]) {
//             count = arg[i];
//         }
//     }
//     return count;
// }
// let res = maxNum(array);
// console.log(res);

// // 2-masala
// let array = [1, 2, 3, 4, 5, 6];
// function evenNum(arg) {
//     let arr = arg.filter(num => num % 2 === 0)
//     return arr;
// }
// let res = evenNum(array);
// console.log(res);

// // 3-masala
// let array = [1, 2, 3, 4, 5, 6];
// function sumArr(arg) {
//     let sum = 0;
//     for (const i of arg) {
//         sum += i;
//     }
//     return sum;
// }
// let res = sumArr(array);
// console.log(res);

// // 4-masala
// let array = [1, 2, 3, 4, 5, 6];
// function doubleNum(arg) {
//     let arr = arg.map(num => num * 2);
//     return arr;
// }
// let res = doubleNum(array);
// console.log(res);

// // 5-masala
// let array = [1, -2, 3, -4, 5, -6];
// function posNum(arg) {
//     let arr = arg.filter(num => num >=0);
//     return arr;
// }
// let res = posNum(array);
// console.log(res);

// // 6-masala
// let numbers = [1, 2, 2, 3, 4, 4, 5];
// function uniqueItem(arg) {
//     return [...new Set(arg)];
// }
// let res = uniqueItem(numbers);
// console.log(res);

// // 7-masala
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// function combine(arg1, arg2) {
//     let arr = arg1.concat(arg2);
//     return arr;
// }
// let res = combine(arr1, arr2);
// console.log(res);

// // 8-masala
// let numbers = [1, 2, 2, 3, 4, 4, 5];
// function reverseArr(arg) {
//     let arr = arg.reverse();
//     return arr;
// }
// let res = reverseArr(numbers);
// console.log(res);

// // 9-masala
// let numbers = [1, 2, 2, 3, 4, 4, 5];
// function oddIndex(arg) {
//     let arr = arg.filter((_, index) => index % 2 ===1);
//     return arr;
// }
// let res = oddIndex(numbers);
// console.log(res);

// // 10-masala
// let numbers = [1, 2, 3, 4, 5];
// function averageValue(arg) {
//     let sum = 0;
//     arg.forEach(element => {
//         sum += element;
//     });
//     return sum / numbers.length;
// }
// let res = averageValue(numbers);
// console.log(res);


// ___________________/ Obyekt va Massivlarga oid masalalar \___________________
// // 1-masala
// const peoples = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function getOldestPersonName(people) {
//     const maxAge = Math.max(...people.map(num => num.age));
//     const arr = people.find(num => num.age === maxAge);
//     return arr.name;
// }
// let res = getOldestPersonName(peoples);
// console.log(res);

// // 2*-masala
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function getPeopleAboveAge(people, ages) {
//     let maxAge = people.filter(num => num.age > ages);
//     return maxAge = people.map(num => num.name);
// }
// let res = getPeopleAboveAge(people, 20);
// console.log(res);

// // 3-masala
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function getNames(people) {
//     let arrName = people.map(num => num.name);
//  }
// let res = getNames(people);
// console.log(res);

// // 4-masala
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function getTotalAge(peoples) {
//     let sum = 0;
//     peoples.forEach(element => {
//         sum += element.age;
//     });
//     return sum;
// }
// let res = getTotalAge(people);
// console.log(res);

// // 5-masala
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function getPersonByName(peoples, name) {
//     let searchName = peoples.find(num => num.name === name);
//     return searchName;
// }
// let res = getPersonByName(people, 'Ali')
// console.log(res);

// // 6-masala
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 35 }
// ];
// function getAverageAge(peoples) {
//     let sum = 0;
//     peoples.forEach(element => {
//         sum += element.age;
//     });
//     return sum / peoples.length;
// }
// let res = getAverageAge(people);
// console.log(res);

// // 7-masala
// const people = [
//     { name: "Ali", age: 25, gender: "male" },
//     { name: "Vali", age: 30, gender: "male" },
//     { name: "Hasan", age: 28, gender: "male" },
//     { name: "Salima", age: 22, gender: "female" },
//     { name: "Xalima", age: 21, gender: "female" }
// ];
// function getFemales(peoples) {
//     let arr = peoples.filter(num => num.gender === 'female')
//     return arr
// }
// let res = getFemales(people);
// console.log(res);

// // 8-masala
// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];
// function incrementAges(peoples) {
//     peoples.forEach(element => {
//         element.age += 1;
//     })

// }
// incrementAges(people);
// console.log(people);

// // 9-masala. Berilgan student ID orqali talaba ma'lumotlarini qaytaruvchi funksiya yozing.
// const students = {
//     "001": { name: "Dilorom", age: 21, grade: "A" },
//     "002": { name: "Olim", age: 22, grade: "B" },
//     "003": { name: "Zafar", age: 20, grade: "A" }
// };

// function searchID(person, ID) {
//     return person[ID] || null; 
// }

// let res = searchID(students, '001');
// console.log(res);






















