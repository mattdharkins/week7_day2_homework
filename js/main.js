

// Homework //

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// This first one will console log each item in list except for shakes since its value is a dictionary
function displayFood(){
    for(let i = 0; i < Object.keys(person3).length; i++){
        if(Array.isArray(Object.values(person3)[i])){
            Object.values(person3)[i].forEach( element => console.log(element))
        }
        else {
            console.log(Object.values(person3)[i])
        }
    }
}

displayFood()

// or

// This second one will console log list items as lists
function displayFood(){
    for(let i = 0; i < Object.keys(person3).length; i++){
        if(Array.isArray(Object.values(person3)[i])){
            console.log(Object.values(person3)[i])
        }
        else {
            console.log(Object.values(person3)[i])
        }
    }
}

displayFood()

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class homoSapien{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    printInfo(){
        return `${this.name} is ${this.age} years old.`
    }
    gettingOlder(){
        this.age += 1
        return (`${this.name} just got older and is now ${this.age} years old.`)
    }
    addAge(years){
        this.age += years
        return (`${this.name} just got older and is now ${this.age} years old.`)
    }
}

let barry = new homoSapien('Barry', 36)
console.log(barry.printInfo())

let jerry = new homoSapien('Jerry', 32)
console.log(jerry.printInfo())
console.log(jerry.gettingOlder())
console.log(jerry.gettingOlder())
console.log(jerry.gettingOlder())

console.log(barry.addAge(5))

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const tenWord = word =>{
    return new Promise( (resolve, reject) =>{
        word.length >= 10 ? resolve(true) : reject(false)
    })
}

tenWord('bumbershoot')

.then( (isTen) =>{
    console.log('Big word')
})

.catch( (notTen) =>{
    console.log('Small Number')
})

