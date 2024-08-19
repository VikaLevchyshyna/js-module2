// arguments (arrow functions don't have)

// function calculateAverage() {
    
//     const argsArray = Array.from(arguments);
 
//     let sum = 0;
//     for (const arg of argsArray) {
//         sum += arg;
//     }
    
//     return sum / argsArray.length;
// }

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2, 3, 4));
// console.log(calculateAverage(27, 43, 2, 8, 36));



// function calculateAverage(...args) {
//     console.log(args);
    
//     let sum = 0;
//     for (const arg of args) {
//         if (Number.isNaN(Number(arg))) {
//             continue;
//         }
//         sum += arg;
//     }
    
//     return sum / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2, 3, 4));
// console.log(calculateAverage(27, 43, 2, 8, 36));
// console.log(calculateAverage(1, 2, 'Abc', 4));


// Write the function, which get random number of numbers and add only unique value to array uniqueNumbers 

// const uniqueNumbers = [2, 1, 4, 9];

// const addUniqueNumbers = (array, ...numbers) => {
//     // console.log(array);
//     // console.log(numbers);
    
//     const arrayCopy = array.slice();   // copy our array, don't mutation our array
    
//     for (number of numbers) {
//         if (!arrayCopy.includes(number)) {
//             arrayCopy.push(number);
//         }
//     }
//     return arrayCopy;

// }

// // const newArray = addUniqueNumbers(1, 2, 3);
// // console.log(uniqueNumbers);

// const newArray = addUniqueNumbers(uniqueNumbers, 12, 2, 3, 19);
// console.log(uniqueNumbers);
// console.log(newArray);


// const newArray = addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(uniqueNumbers);

