/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const stringWithoutSpaces = removeSpacesAndSpecialCharacters(str.toLowerCase())
  return stringWithoutSpaces === stringWithoutSpaces.split("").reverse().join("");
}

const removeSpacesAndSpecialCharacters = (string) => {
  const stringArr = string.split("").filter((alphabet) => (alphabet !== " " && isLowercaseAlphabet(alphabet.charCodeAt(0)) ))
  return stringArr.join("")
}

const isLowercaseAlphabet = (charCode) => ( charCode >= 97 && charCode <= 122)


isPalindrome("A man, a plan, a canal. Panama")

module.exports = isPalindrome;
