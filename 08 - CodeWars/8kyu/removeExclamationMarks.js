// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  // regex //
  // g means global to seek all exclamation marks
  return s.replace(/!/g, "");
}
