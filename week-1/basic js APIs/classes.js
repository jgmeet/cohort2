class Animal {
    constructor(name, legs, age) {
        this.name = name
        // this.legs = legs
        this.age = age
    }

    // function for class, only can be accesed with class name
    static type() {
        console.log("Hi, I am an animal")
    }

    // function for objects
    itsAge() {
        console.log("age of " + this.name + " is " + this.age)
    }
}

const dog = new Animal("sheru", 4, 2)
const cat = new Animal("tindi", 4, 4)

dog.itsAge()
cat.itsAge()
Animal.type()