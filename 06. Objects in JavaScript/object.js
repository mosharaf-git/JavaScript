// Object Literal in Javascript
// var obj = {
//     myName: 'Mosharaf Hossain',
//     myRoll: 366866,
//     myInstitute: 'Sherpur Polytechnic Institute',
//     myOccupation: 'Junior Software Developer'
// }

// obj.myName = 'Musharraf Hussein'        // Setting Object Property

// console.log(obj.myInstitute)            // Access Object Property

// delete obj.myRoll                       // Remove Object Property
// console.log(obj)

// console.log("Meet Mr. "+obj.myName+ " who is a student of "+ obj.myInstitute +" and His roll no is "+ obj.myRoll +" he is now "+ obj.myOccupation +" in Brain Station 23")


// Object Constructor in JavaScript
// var myObject = new Object()
// myObject.name = 'Mosharaf Hossain'
// console.log(myObject.name)


// Object Iteration
// var myObject2 = {
//     x: 10,
//     y: 30,                          // x, y, z is key/property and 10, 30, 50 is value
//     z: 50
// }
// console.log('x' in myObject2)

// for(var i in myObject2){
//     console.log(i)
//     console.log(myObject2[i])
// }


// Object Methods
var myObject3 = {
    x: 90,
    y: 180,
    z: 270
}
console.log(Object.keys(myObject3))             // Print the keys of an object
console.log(Object.values(myObject3))           // Print the value of an object
console.log(Object.entries(myObject3))          // Print array of an object

var myObject4 = Object.assign({}, myObject3)    // Clone and Create an new object
myObject4.x = 200
console.log(myObject4)


