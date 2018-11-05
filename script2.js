let numbers = [22,23,99,68,1,0,9,112,223,64,18];
numbers.sort(function(a, b){
  return a - b; // ascending|| b - a; descending||
});
console.log(numbers);

let words = ['hello', 'goodbye', 'first', 'A', 'a', 'second', 'third'];
// words.sort(); // ascending order is by default.
// console.log(words);

// words.sort().reverse(); easy way for descending order
// console.log(words);
// words.sort(function(a, b){ // hard way, to do descending order
    // if (a > b){
    //   return -1;
    // }
    // if (a < b){
    //   return 1;
    // }
    // return 0;
// });
// console.log(words);
// Sorting by Length
words.sort(function(a, b){
  if (a.length > b.length){
    return -1;
  }
  if (a.length < b.length){
    return 1;
  }
    return 0;
});
console.log(words);

// Splice below

let bootcamps = ['Miami', 'Paris', 'Barcelona', 'Madrid', 'Mexico'];
bootcamps.splice(2,2);

console.log(bootcamps);

let a = ['one', 'two', 'three'];
let ba = a.reverse();
console.log(a);
console.log(ba)
