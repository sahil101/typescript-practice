const user = {
    name: "Sahil",
    age: 60
}

const admin = {
    isAdmin : true
}

user.__proto__ = admin


console.log(user.__proto__)
console.log(user.isAdmin)