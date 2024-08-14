// I try to do this in small baby steps.

// split the name into two words
// take the first character of the word
// capitalize this character
// do this for both words
// join both characters with a dot
// return the joined characters

function abbrevName(name) {
  return (
    name
      // split the name into two words
      .split(" ")

      // take first char of both parts and capitalize them
      .map((part) => part[0].toUpperCase())

      // join both characters with a dot
      .join(".")
  );
}

// The split() method of String values takes a pattern and divides this string into an ordered list
// of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// The map() method of Array instances creates a new array populated
// with the results of calling a provided function on every element in the calling array.

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,
// separated by commas or a specified separator string.
// If the array has only one item, then that item will be returned without using the separator.
