username = "Test String"
for (let char of username){
    console.log(char)
}

numbers = [1, 2, 3, 4, 5]
for (let number in numbers){
    console.log(number)
}


let someObject = {
    [Symbol.iterator] (){

    }
}

let someOtherObject = {
    next(){
        if (elementsToIterate){
            data = getTheRelevantDataFromElement
            pointToNextElement
            return {value: data, done: false}
        }
        else{
            return {value: undefined, done: true}
        }
    }
}
