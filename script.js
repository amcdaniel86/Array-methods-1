
// does not work. must use MAP in this case. see below
// let  array = [1, 2, 3];
// let newArray = array.forEach(function(number){
//   return number * 2;
// })
// console.log(newArray);

//correct version using .MAP
// array = [1, 2, 3];
// let newArray = array.map(function(number){
//   return number * 2;
// })
// console.log(newArray);

// let arr = [50, 100, 150];
// let newArr = arr.map(function(num2){
//   return num2 / 2;
// })
// console.log(newArr);
// // forEach method below

// array = [1,2,3];
// let newArr2 = [];
// array.forEach(function(number){
//   newArr2.push(number * 2);
// })
// console.log(newArr2);

// let foods = ['pizza', 'sandwiches', 'ice cream'];
// let capsFoods = foods.map(function(food){
//   return food.toUpperCase();
// });
// console.log(capsFoods);

// let cities = ['miami', 'barcelona', 'madrid'];
// let capsCities = cities.map(function(caps){

// });
// console.log(capsCities);


// let students = [
//   {
//     name: "Tony Parker",
//     firstProject: 80,
//     secondProject: 75,
//     finalExam: 90
//   },
//   {
//     name: "Marc Barchini",
//     firstProject: 84,
//     secondProject: 65,
//     finalExam: 65
//   },
//   {
//     name: "Claudia Lopez",
//     firstProject: 45,
//     secondProject: 95,
//     finalExam: 99
//   },
//   {
//     name: "Alvaro Briattore",
//     firstProject: 82,
//     secondProject: 92,
// finalExam: 70
// },
// {
//   name: "Isabel Ortega",
//   firstProject: 90,
//   secondProject: 32,
//   finalExam: 85
// },
// {
//   name: "Francisco Martinez",
//   firstProject: 90,
//   secondProject: 55,
//   finalExam: 78
// },
// {
//   name: "Jorge Carrillo",
//   firstProject: 83,
//   secondProject: 77,
//   finalExam: 90
// },
// {
//   name: "Miguel López",
// firstProject: 80,
//   secondProject: 75,
//   finalExam: 75
// },
// {
//   name: "Carolina Perez",
//   firstProject: 85,
//   secondProject: 72,
//   finalExam: 67
// },
// {
//   name: "Ruben Pardo",
//   firstProject: 89,
//   secondProject: 72,
//   finalExam: 65
// }
// ]

// let newStudents = students.map(function(less){
//   let projectsAvg = (less.firstProject + less.secondProject)/2;
//   let finalGrade = less.finalExam*0.6 + projectsAvg*0.4;
//   return {
//     name: less.name,
//     finalGrade: Math.round(finalGrade)
//   }
// })
// console.log(newStudents);

// Array.reduce(
  // callback(accumulator, current, currentIndex, originalArray),
  // initialValue
// )
let numbers = [2, 4, 6, 8];
let total = numbers.reduce(function(sum, num){
  return sum * num;
}, 1);
console.log(total);

// good example .reduce below
let words = ['this', 'is', 'one', 'big', 'string'];
let bigString = words.reduce(function(sum, word){
  return sum + word;
});
console.log(bigString);

let people = [
  { name: "Candice", age: 25 },
  { name: "Tammy",   age: 30 },
  { name: "Allen",   age: 49 },
  { name: "Nettie",  age: 21 },
  { name: "Stuart",  age: 17 }
];

let ages = people.reduce(function(sum, person){
  return sum + person.age;
}, 0);
console.log(ages);

var menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];

let totalCals = menu.reduce(function(sum, food){
  return sum + food.calories;
}, 0);
console.log(totalCals);
