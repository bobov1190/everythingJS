// // const num = 42; // integer -- number
// // const floatNum = 42.42; // float -- number
// // const pow = 10e3; // 1000
// // const big = 1_000_000; // 1000000

// // console.log(Number.MAX_SAFE_INTEGER); // 2^53 - 1
// // console.log(Math.pow(2, 53) - 1);
// // console.log(Number.MIN_SAFE_INTEGER); // -2^53 + 1
// // console.log(Number.MIN_VALUE); // 2^-1022
// // console.log(Number.MAX_VALUE); // 2^1023
// // console.log(Number.POSITIVE_INFINITY); // Infinity
// // console.log(Number.NEGATIVE_INFINITY); // -Infinity
// // console.log(1 / 0); // Infinity
// // console.log(Number.isFinite(1 / 0)); // false
// // console.log(typeof 1 / undefined); // number
// // const nan = Number.NaN; // not a number
// // console.log(Number.isNaN(nan)); // true
// // console.log(Number.isNaN(42)); // false
// // console.log(Number.isNaN("42")); // false
// // console.log(Number.isInteger(42.42)); // false

// const strInt = "42";
// const strFloat = "42.42";

// console.log(parseInt(strInt)); // 42
// console.log(parseFloat(strFloat)); // 42.42
// console.log(+strInt); // 42
// console.log(+strFloat); // 42.42

// // console.log(-strInt, -strFloat); // returns -42, -42.42

// // console.log(+(0.1 + 0.2).toFixed(1)); // 0.3

// // BigInt and Some of the Math methods

// // console.log(BigInt(Number.MAX_SAFE_INTEGER) + 100000000000000000000000n); // returns bigInt
// // console.log(-42n); // -42n
// // console.log(42.42n); // error
// // console.log(0.2 + 10n); // error
// // console.log(parseInt(10n) + 4); // 14
// // console.log(5n / 2n); // 2n
// // console.log(Math.PI); // Pi num
// // console.log(Math.E); // E num
// // console.log(Math.sqrt(25)); // 5
// // console.log(Math.pow(25, 2)); / 625
// // console.log(Math.abs(-25)); // 25
// // console.log(Math.max(2, 5, 5, 6, 8, 8, 9)); // 9
// // console.log(Math.min(2, 5, 5, 6, 8, 8, 9)); // 2
// // console.log(Math.floor(4.9)); // 4
// // console.log(Math.ceil(4.9)); // 5
// console.log(Math.round(4.4)); // 4->4.4 5->4.5
// console.log(Math.trunc(4.9)); // 4

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const numb = getRandomNumber(14, 16);
// console.log(numb);
