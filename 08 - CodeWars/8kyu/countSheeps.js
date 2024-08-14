// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true
// ]

function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}

// Boolean: In this case, the provided function is Boolean. When used in this context, Boolean will convert each element of the sheep array to a boolean value (either true or false).
// If an element is truthy (like true, a non-zero number, a non-empty string, etc.), it will remain in the new array.
// If an element is falsy (like false, 0, null, undefined, NaN, or an empty string), it will be filtered out.
