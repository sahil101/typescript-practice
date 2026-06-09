function personDetails(name, age) {
    console.log(name, age, this.sex)
}


const sex = {sex: "male"}

personDetails.call(sex, "Sahil", 28)
personDetails.apply(sex, ["Sahil", 28])


const boundGreet = personDetails.bind(sex);
boundGreet("Delhi", "India");     


// closure


function increment() {
    let inner = 0;

    return function fn() {
        inner++;
        return  inner
    }
}


const inc = increment()
console.log(inc())

console.log(inc())

console.log(inc())