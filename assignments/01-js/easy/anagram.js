/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const s1 = str1.toLowerCase()
  const s2 = str2.toLowerCase()

  const mp = new Map()
  for(let i=0; i<s1.length; i++) {
      mp.set(s1[i],(mp.get(s1[i])||0)+1)
  }
  for(let i=0; i<s2.length; i++) {
      mp.set(s2[i],(mp.get(s2[i])||0)-1)
  }

  for(let value of mp.values()) {
      if(value != 0) return false;
  }

  return true;
}

module.exports = isAnagram;
