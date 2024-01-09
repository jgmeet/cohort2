const obj = {
    name: "jagmeet",
    age: "17",
}
console.log("before stringify :- ")
console.log(obj)

// to share this object, it should be converted to JSON
// and then it can be shared

// JSON.strigify(data) -> converts data to string format
const obj1 = JSON.stringify(obj)
console.log("after stringify :- ")
console.log(obj1)
