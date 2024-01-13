/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = ""
  for(let i=0; i<str.length; i++) {
      let ref = 'a'
      let refVal = ref.charCodeAt(0)
      let char = str[i].toLowerCase()
      let asciiVal = char.charCodeAt(0)-refVal
      console.log(char + " " + asciiVal)
      if(asciiVal >= 0 && asciiVal < 26) {
      newStr += char
      }
  }

  let s=0, e=newStr.length-1
  while(s<e) {
      if(newStr[s] != newStr[e]) {
      return false;
      }
      s++, e--;
  }

  return true;
}

module.exports = isPalindrome;
