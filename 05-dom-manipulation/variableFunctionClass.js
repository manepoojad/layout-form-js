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

class User {
  constructor(firstName, middleName, surname, age) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = surname;
    this.age = age;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.middleName + " " + this.lastName;
    // console.log(fullName);
    return fullName;
  }


  getFamilyInfo() {
    const fullName = this.getFullName();
    const userInfo = {
      fullName: fullName,
      age: this.age,
    };
    // console.log(userInfo)
    return userInfo;
  }
}

const poojaDetail = new User("Pooja", "Devidas", "Mane", 24);
// const poojaFullName = poojaDetail.getFullName();
// console.log(poojaFullName);
const poojaFamilyInfo = poojaDetail.getFamilyInfo();
console.log("poojaFamilyInfo", poojaFamilyInfo);















const myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () { myResolve("I love You !!"); }, 5000);
});

console.log(myPromise)
myPromise.then(function (value) {
  console.log("promise value", value)
});
console.log(myPromise)








