/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(ch) {
  return ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'
}

function countVowels(str) {
  // Your code here
  let numOFVowels = 0
  let newStr = str.toLowerCase()

  for(let i=0; i<str.length; i++) {
    if(isVowel(newStr[i])) {
      numOFVowels++
    }
  }

  return numOFVowels
}

module.exports = countVowels;