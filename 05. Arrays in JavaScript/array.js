// Declaration of an Array
var arr1 = [ 8, 3, 9, 1, 4, 12, 35]
console.log(arr1)
console.log(arr1.length)

// Array Traversing
var arr2 = [21, 23, 31, 43, 54, 65, 86]       // Traversing an Array

for(var i = 0; i < arr2.length; i++){
    console.log(arr2[i])
}

var sum = 0
for(var i =  0; i < arr2.length; i++){
    sum += arr2[i]                           // Sum of an Array
}
console.log(sum)



// Array Insert, Remove, Replace

var arr3 = [ 3, 9, 5, 12, 4, 32]
arr3.push(34)                                    // Adding an element to the end of the array
console.log(arr3)

var arr4 = [10, 22, 13, 39, 15, 12, 24, 32]
arr4.pop()                                      // Removing an element to the end of the array
console.log(arr4)

var arr5 = [10, 22, 13, 39, 15, 13, 24, 32]
arr5.unshift(12)                                // Adding an element to the beginning of the array
console.log(arr5)

var arr6 = [10, 22, 13, 39, 15, 13, 24, 32]
arr6.shift()                                    // Removing an element to the beginning of the array    
console.log(arr6)

var arr7 = [1, 2, 3, 4, 5, 6, 7, 8]
arr7.splice(4, 2)                               // Removing an element to the specific area of the array    
console.log(arr7)

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');                     // Adding an element to the specific area of the array    
months.splice(4, 0, 'May');

console.log(months);

// Search a Value
var arr8 = [ 23, 32, 41, 48, 50, 56]
var find = 10
var isFound = false

for(var i = 0; i < arr8.length; i++){
    if(arr8[i] == find){
        console.log('Data Found at index '+ i)
        isFound = true
        break
    }
}

if(!isFound){
    console.log('Data not Found')
}


// Multidimensional Array
var multiArray = [
    [79, 85, 76, 82],
    [67, 81, 75, 52],
    [87, 88, 64, 72],
    [71, 65, 75, 42]
]

for(var i = 0; i < multiArray.length; i++){
    for(var j = 0; j < multiArray[i].length; j++){
        console.log('Element '+ i +' '+ multiArray[i][j])
    }
}

// Array Reverse in JavaScript
arr9 = [1, 2, 3, 4];
arr10 = [];
for (var i = arr9.length - 1; i >= 0; i--) {
    arr10.push(arr9[i]);
}
console.log(arr10);

// Built-in Function
var arr11 = [3, 5, 8, 9, 12, 13]
arr11.reverse()
console.log(arr11)


// Array Methods
var arr11 = [2, 5, 4, 7, 8, 12]
var joined = arr11.join(' | ')          // Join an Array with Particular Object
console.log(joined)

var arr12 = [10, 21, 43, 27, 48, 52]
var filled = arr12.fill('9xm')          // Fill an Array with Particular Object
console.log(filled)

var concatenating = arr11.concat(arr12)
console.log(concatenating)




