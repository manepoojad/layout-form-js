"use strict";
//IMP function return statement
function learnReturnStatement() {
  const fullName = "Pooja Mane"
  return fullName
}

const returnValue = learnReturnStatement()
console.log("returnValue", returnValue)

// parameter passed return statement
function parameterReturnFunction(parameter1, parameter2) {
  const newObj = {
    argument1: parameter1,
    argument2: parameter2,
  }
  return newObj
}
const fruitName = "banana"
const parameterReturnValue = parameterReturnFunction("apple", fruitName)
console.log("parameterReturnValue", parameterReturnValue)


const learnArrowFunction = () => {
  console.log("This is arrow function myTest")

  return "pooja"
}

const learnArrowFunctionValue = learnArrowFunction()
console.log("learnArrowFunctionValue", learnArrowFunctionValue)



const myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () { myResolve("I love You !!"); }, 5000);
});

console.log(myPromise)
myPromise.then(function (value) {
  console.log("promise value", value)
});
console.log(myPromise)






