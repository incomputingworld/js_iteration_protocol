const { isGeneratorObject } = require("util/types")

// generator function - structure
// function* myGenerator{

// }

// generator function 
function * myGenerator(){
    console.log("Hey")
    yield 1
}

// iterObj = myGenerator() // returns a Generator object
// console.log(iterObj.next()) // outputs "Hey" and {value: 1, done: false}
// console.log(iterObj.next()) // outputs {value: undefined, done: true}
// console.log(iterObj, isGeneratorObject(iterObj))


// generator function - counter 
function* myCounter(maxValue){
    let i = 0
    while (i < maxValue){
        yield i++ // pause the execution
    }
    return undefined // complete the function execution 
}

// let numbers = myCounter(5) // generator object
// for (number of numbers){
//     console.log(number)
// }
// generator function - range functionality
function* myRange(start=0, step=1, stop=10){
    let i = start
    while (i <= stop){
        yield i // pasue execution here
        i += step // resume execution from here
    }
}

let oddNumbers = myRange(1,2) // creates a new generator object
// for (number of oddNumbers){
//     console.log(number)
// } // Outputs - 1 3 5 7 9

// let evenNumbers = myRange(2, 2) // creates a new generator object
// console.log(evenNumbers.next()) // Outputs - {value: 2, done: false}
// console.log(evenNumbers.next()) // Outputs - {value: 4, done: false}
// console.log(evenNumbers.next()) // Outputs - {value: 6, done: false}


// generator function as expression.
let myCounterExp = function* (maxValue){
    let i = 0
    while (i < maxValue){
        yield i++ // pause the execution
    }
    return undefined // complete the function execution  
}
// let numbers = myCounterExp(5) // generator object
// for (number of numbers){
//     console.log(number)
// }

// generator function - as an attribute of an object 
let counterObj = {
    maxValue: 0,
    *myGenerator() {
        let limit = this.maxValue;
        for (let i = 0; i < limit;){
            yield i++ // pause the execution
        }
    },
}

counterObj.maxValue = 4
let firstCounter = counterObj.myGenerator() // returns generator object
for (number of firstCounter){ // starts execution of generator function
    console.log(number)
}

// counterObj.maxValue = 5
// let secondCounter = counterObj.generator()
// for (number of secondCounter){
//     console.log(number)
// }

// generator function - as a method of a class
class CounterClass{
    constructor(value=10){
        this.maxValue = value
    }
    *myOwnGenerator(){
        let limit = this.maxValue;
        for (let i = 0; i < limit;){
            yield i++ // pause the execution
        }
    }        
}

let countNumbers = new CounterClass(5) // new object of the class
let countGenObj = countNumbers.myOwnGenerator() // returns generator object
for(num of countGenObj){ // starts execution of generator function
    console.log(num)
}