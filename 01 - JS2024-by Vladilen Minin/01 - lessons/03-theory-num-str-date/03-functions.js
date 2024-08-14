// Function Declaration
// can use it before definition
function greet(name) {
  console.log("Hello", name);
}
// greet("bakhodir");

// Function Expression
// can't use it before definition
const greet2 = function (name) {
  console.log("Hello", name);
};
// greet2("BryaN");

// console.log(typeof greet);
// console.log(greet.toString());
// console.dir(greet);

// clearTimeout(timeout);
// setTimeout(function () {
//   greet("Bahodir");
// }, 2000);

// let counter = 0;
// const interval = setInterval(function () {
//   //   if (counter === 5) {
//   //     clearInterval(interval);
//   //   } else {
//   //     console.log(++counter);
//   //   }
//   console.log(++counter);
// }, 1000);

// const arrow = (name) => {
//   console.log(`Hello ${name}`);
// };

// const arrow2 = (name) => console.log(`Hello ${name}`);
// arrow2("sss");

// function pow(num, exp) {
//   return Math.pow(num, exp);
// }

// const pow2 = (num, exp) => Math.pow(num, exp);

// console.log(pow(2, 4), pow2(4, 4));

// // ======== Default Parameters

// const sum = (a = 1, b = a * 4) => a + b;
// console.log(sum(1, 2));
// console.log(sum(1));
// console.log(sum());

// function sumAll(...numbers) {
//   //   console.log(numbers);
//   let res = 0;
//   //   for (let num of numbers) {
//   //     res += num;
//   //   }
//   return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// sumAll();

// Closures

function createPerson(name) {
  return function (lastname) {
    console.log(name + " " + lastname);
  };
}

const addLastName = createPerson("Bakhodir");
addLastName("Khudoyorov");
addLastName("Botirov");
