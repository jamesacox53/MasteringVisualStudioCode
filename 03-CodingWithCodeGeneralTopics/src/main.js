import { toUpperCase } from "./coolUtils"

function square(arg, second){
    return arg * arg
}

function cube(arg) {
    return arg * arg * arg
}

const printMessage = (message)=>{
    console.log(message)
}

const capital = toUpperCase('hello')

const coolVariable = square(2);
const b = cube(coolVariable);


console.log('Finished awesome program');
