// Animal (base)
// ├── name, age
// ├── eat()
// ├── sleep()
// │
// ├── Dog extends Animal
// │   ├── breed
// │   ├── bark()
// │   └── fetch()
// │
// └── GuideDog extends Dog
//     ├── owner
//     ├── guide()
//     └── override eat()  ← eats on a schedule


class Animal {
    name
    age
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        console.log(this.name, ' Eating')
    }
    sleep() {
        console.log(this.name, " sleeping")
    }
}
class Dog extends Animal {
    breed
    constructor(name, age, breed) {
        super(name, age)
        this.breed = breed
    }

    bark() {
        console.log(this.name, ' bark')
    }
    fetch() {
        console.log(this.name, " fetch")
    }
}

class GuideDog extends Dog {
    owner
    constructor(name, age , breed, owner) {
        super(name, age, breed)
        this.owner = owner
    }

    guide(){
        console.log(this.name, ' guide()')
    }
    eat() {
        console.log(this.name, " eats on a schedule")
    }
}


const gd = new GuideDog("Rex", 3, "Labrador", "John");

gd.eat();    // "Rex eats on a schedule"  (overridden)
gd.sleep();  // "Rex is sleeping"         (from Animal)
gd.bark();   // "Rex barks"               (from Dog)
gd.guide();  // "Rex is guiding John"     (own method)

// these should all be true
gd instanceof GuideDog  // true
gd instanceof Dog       // true
gd instanceof Animal    // true

// property checks
gd.hasOwnProperty("owner")  // true
gd.hasOwnProperty("bark") 

let a = 123
a  = a.toString()
console.log(a.toString())
console.log(typeof a)
b = "5" - 2

console.log(typeof b)


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const s = new Set(values)
console.log(s)


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");

console.log(keys)
