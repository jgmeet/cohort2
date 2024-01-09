const str = "waheguru ji ka khalsa, waheguru ji ki fateh"

// length
console.log("length of " + str + " is: " + str.length)

// indexOf()
console.log(str.indexOf("ji"))
console.log(str.indexOf("a"))

// lastIndexOf()
console.log(str.lastIndexOf("waheguru"))
console.log(str.lastIndexOf("abcd")) // gives -1 if input not found

// slice(a,b) -> gives string from index a to b-1
// substr(a,b) -> gives string from index a to a+b-1 i.e., of length b
console.log(str.slice(0,11))
// console.log(str.substr(9, 2))

// replce(oldWord, newWord) -> replaces oldWord with newWord in string str
const newStr = str.replace("waheguru", "Waheguru")
console.log(newStr)
console.log(str) 
// **Note - only newStr have changed value, str not changed after this

// split(delimeter)
const words = str.split(" ");
console.group(words)

// trim()
// trims out extra spaces from the beginning and end
let s = "    ffwfe     ffweef     "
let sTrimed = s.trim()
console.log(s)
console.log(sTrimed)

// toUpperCase() and toLowerCase()
