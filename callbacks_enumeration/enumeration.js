const myNumbers = [1, 2, 3, 4, 5];

// for (const number of myNumbers){
//   console.log(`This is number ${number}`);
// }

// myNumbers.forEach((number, index) => {
//   console.log(`This is number ${number} at index position ${index}`);
// })

// const multiplyByTwo = function(numbers){
//   const result = [];
// numbers.forEach((number) => {
//   const multiplied = number * 2;
//   result.push(multiplied);
// })
//   return result;
// }
//  console.log(multiplyByTwo(myNumbers));

//returns evens numbers

// const getEvens = function(numbers){ //function takes an array of function
//   const result = [];
//   numbers.forEach((number) => {
//     if(number % 2 === 0)
//     result.push(number);
//   })
//   return result;
// }
// console.log(getEvens(myNumbers));

//retuns total of numbers

// const sumElements = function(numbers){
//   let total = 0;
//   numbers.forEach((number) => {
//     total += number
//
//   })
//   return total;
// }
//
// console.log(sumElements(myNumbers));

// map method

// const multiplyByTwo = function(numbers){
//   const result = numbers.map( (number) => {
//     return number * 2;
//   });
//
//   return result
// }
//
// console.log(multiplyByTwo(myNumbers));

//filter method

// const getEvens = function(numbers){
//   const result = numbers.filter( (number) => {
//     return number % 2 === 0;
//   } );
//   return result;
// }
// console.log(getEvens(myNumbers));
//
// //reduce method
//
// const sumElements = function(numbers){
//   const total = numbers.reduce(
//     (runningTotal, number) => {return runningTotal + number}, 0);
//
//   return total;
// }
//
// console.log(sumElements(myNumbers));

const outForEach = function(array, callback){
  for (const element of array){
    callback(element);
  }
}

outForEach(myNumbers, (number) => {
  console.log('The number is:', number);
})
