/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowelCount = 0;
    for(let i = 0; i < str.length; i++){
      if(isVowel(str.toLowerCase().charAt(i))) vowelCount += 1
    }
    return vowelCount
}

const isVowel = (char) => {
  if(['a', 'e', 'i', 'o', 'u'].includes(char)) return true
  return false
}



module.exports = countVowels;