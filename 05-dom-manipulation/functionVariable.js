function testFunction(params) {
  const fruit = "apple"
  const bird = "Peacock"
}

const testValue = testFunction()
console.log("testValue", testValue)

const myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () { myResolve("I love You !!"); }, 5000);
});

console.log(myPromise)
myPromise.then(function (value) {
  console.log("promise value",value)
});
console.log(myPromise)





