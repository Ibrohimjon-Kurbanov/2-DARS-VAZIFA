// Massiv

// 1-masala

// function greet(arg) {
//   let res1 = arg.filter(function (value) {
//     return value.length >= 5;
//   });

//   let res2 = res1.map(function (value) {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   });

//   return res2;
// }

// let arr = ["mandarin", "olma", "banana", "nok", "shaftoli"];

// console.log(greet(arr));

// 2-masala

// let arr = [
//   { name: "Ibrohimjon", age: 15 },
//   { name: "zufarmax", age: 22 },
//   { name: "johongir", age: 23 },
// ];

// function greet(arg) {
//   let res1 = arg.find(function (value) {
//     return value.age > 20;
//   });

//   if (res1) {
//     let res2 = res1.name.toUpperCase();
//     console.log(res2);
//   }
// }

// greet(arr);

// 3-masala

// let arr = [
//   { name: "Product1", price: 9000 },
//   { name: "Product2", price: 12000 },
//   { name: "Product3", price: 7000 },
//   { name: "Product4", price: 15000 },
// ];

// function productSum(arg) {
//   let res = arg.filter(function (value) {
//     return value.price > 10000;
//   });

//   let totalPrice = res.reduce(function (sum, value) {
//     return (sum = value.price);
//   }, 0);
//   return totalPrice;
// }

// console.log(productSum(arr));

// 4-MASALA

// let arr = [90, 50, 101, 70];

// function greet(arg) {
//   let positiveNum = arg.every(function (num) {
//     return num > 0;
//   });

//   let bigNum = arg.some(function (num) {
//     return num > 100;
//   });

//   console.log(
//     positiveNum ? "Barcha sonlar musbat" : "Musbat bo'lmagan sonlar bor"
//   );

//   if (bigNum) {
//     console.log("Katta son bor");
//   }
// }

// greet(arr);

// 5-MASALA

// let arr = [2, 3, 4, 5];

// function kvNum(arg) {
//   let res = arg.map(function (value) {
//     return value ** 2;
//   });
//   res.forEach(function (value) {
//     console.log(value);
//   });

//   return res;
// }

// kvNum(arr);

// 6-MASALA

// let arr = [1200, 1500, 2200, 1700, 3000, 2800];

// function sumSalary(arg) {
//   let res1 = arg.filter(function (value) {
//     return value >= 2000;
//   });

//   let res2 = res1.map(function (value) {
//     return value * 1.1;
//   });

//   let res3 = res2.reduce(function (totalSalary, value) {
//     return totalSalary + value;
//   }, 0);

//   return res3;
// }

// console.log(sumSalary(arr));

// 7-MASALA

// let arr = [
//   { name: "Akmal", age: 19, cost: 79 },
//   { name: "Nodir", age: 22, cost: 85 },
//   { name: "Doston", age: 20, cost: 89 },
//   { name: "Kamol", age: 23, cost: 77 },
// ];

// function greet(arg) {
//   let res1 = arg.find(function (value) {
//     return value.cost >= 80;
//   });
//   if (res1) {
//     console.log(res1.name, res1.age);
//   }

//   let res2 = arg.filter(function (value) {
//     return value.cost > 80;
//   });

//   let res3 = res2.map(function (value) {
//     return value.name.toUpperCase();
//   });

//   return res3;
// }

// console.log(greet(arr));

// Yozuvlarga oid.

// 1-masala

// let str = "assalomu alaykum bolar";
// console.log(str.toUpperCase());

// 2-masala

// let str = "hello world, prime";
// let substring = "prime";

// if (str.includes(substring)) {
//   console.log(`${substring} mavjud`);
// } else {
//   console.log(`${substring} mavjud emas`);
// }

// 3-masala

// let str = "JavaScript";
// console.log(str.replace("JavaScript", "JS"));

// 4-masala

// let str = "assalomu alaykum bolar";
// console.log(str.split(" ").reverse().join(" "));

// 5-masala

// let str = "  assalomu alaylum  ";
// console.log(str.trim());

console.log(x);
var x = 5;
console.log(x);
