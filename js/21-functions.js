// functions

// const a = 5;
// const func = function ()  {
//     const a = 10;
//     console.log(a);
//     console.log(b);
//     // console.log(c);
// }

// const b = 0;

// func();

// console.log(a);

// // const c = 10;


// const a = 2;
// const b = 5;

// console.log(addNumbers(a, b));

// function addNumbers(num1, num2) {
//     console.log(num1);
//     if (num1 === undefined || num2 === undefined) {
//         return 'No numbers';
//     }
    
//     console.log('Got numbers');
    
//     const result = num1 + num2;
//     console.log(result);
//     return result;
// }


//function declaration

// const a = 2;
// const b = 5;
// const result1 = addNumbers(a, b);
// console.log(result1);

// function addNumbers(num1, num2) {
//     const result = num1 + num2;
//     return result;
// }

//function expression

// const addNumbers = function(num1, num2) {
//     const result = num1 + num2;
//     return result;
// }

// const a = 2;
// const b = 5;
// const result1 = addNumbers(a, b);
// console.log(result1);


//arrow function
// немає свого this, arguments 

// const addNumbers = (num1, num2) => {
//     return num1 + num2;
// }

// const addNumbers = (num1, num2) => num1 + num2;

// const a = 2;
// const b = 5;
// const result1 = addNumbers(a, b);
// console.log(result1);



// default values

// const showMessage = function (name = 'User', days = 30) {
//     return `${name} has trial version for ${days} days`;
// }

// const showMessage = (name = 'User', days = 30) => `${name} has trial version for ${days} days`;


// const result = showMessage('Jack', 60);
// console.log(result);

// console.log(showMessage());
// console.log(showMessage('Mary', 0));




