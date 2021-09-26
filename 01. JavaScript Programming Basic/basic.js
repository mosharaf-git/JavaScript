// Print Hello World and Hello JavaScript
console.log('Hello World');
console.log('Hello JavaScript');

// Variable in JavaScript
var myName = "Mosharaf Hossain";
var myInstitute = "Sherpur Polytechnic Institute";        // String Type Variable
var myDepartment = "Computer Technology";

var myRoll = 366866;                                     // Integer Type Variable
var myPoint = 3.86;                                     // Float Type Variable

var wasGoodStudent = true;                             // Boolean Type Variable

console.log(myName+ ' ' +myInstitute+ ' ' +myDepartment + ' ' +myRoll+ ' '+myPoint);
console.log(wasGoodStudent);

// Data Types in JavaScript
// Primitive Data Type
var singleQuoteString = 'I Love JS';
var doubleQuoteString = "I Want to Marry JS";      // String Data Type
console.log(singleQuoteString);
console.log(doubleQuoteString);

var number = 1234;
var floatNumber = 21.43  ;                         // Number Data Type
console.log(number);
console.log(floatNumber);

var isTrue = true;
var isFalse = false;                               // Boolean Data Type
console.log(isTrue);
console.log(isFalse);

var zero =  null;
console.log(zero)  ;                               // NULL and Undefined Type
var nothing;
console.log(nothing);

// Non Primitive or Object Data Type
var array = [12, 34, 56, 78, 90];
console.log(array);                               // Array Data Type
console.log(typeof array)

var object = {
    myName: "Mosharaf Hossain",
    myRoll: 366866,
    myInstitute: "Sherpur Polytechnic Institute",    // Oject Data Type
    myDepartment: "Computer Technology",
    isGoodStudent: true
}
console.log(object)
console.log(typeof object)

// Type Conversion
var movie = '300'
console.log(movie)
console.log(typeof movie)

var changeMovieType = Number(movie)
console.log(changeMovieType)
console.log(typeof changeMovieType)


// Operators in JavaScript
var sum = 10 + 5        // Addition Operator
var sub = 15 - 10       // Subtraction Operator
var mul = 5 * 5         // Multiplication Operator      // Arithmetic Operator
var div = 25 - 5        // Division Operator
var reminder = 25 % 5   // Reminder Operator
console.log(sum++)      // Increment Operator (sum = sum + 1)
console.log(sub--)      // Decrement Operator (sum = sum - 1)

console.log(sum, sub, mul, div, reminder)

var a = 10
a += a          // a = a + a = 20
var b = 20
b -= a          // b = b - a = 0
var c = 30
c *= a          // c =  c * a = 600         // Assignment Operator
var d = 40
d /= a          // d = d / a = 2
var e = 50
e %= a          // e = e % a = 10

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

var w = 10
var x = 30
console.log(w > x)     // Greater Than Operator
var w = 10
var x = 30
console.log(w < x)     // Less Than Operator
var u = 22
var v = 33                                          // Relational or Comparison Operator
console.log(u == v)     // Equal to Operator
var num1 = 23
var num2 = 23
console.log(num1 === num2)  // Strict Equal to Operator
console.log(x >= u)         // Greater Than or Equal to Operator
console.log(x <= v)         // Less Than or Equal to Operator
console.log(x != w)         // Not Equal Operator

var ax = 10
var by = 30
var cz = 44
console.log(ax > by && ax > cz)     // Logical AND
console.log(by < cz || by < ay)     // Logical OR          // Logical Operator
console.log(!ax == by)              // Logical NOT


// Math Function in JavaScript
var intMath = 10
var floatMath = 12.344
console.log(Math.pow(4, 2))
console.log(Math.sqrt(9))
console.log(Math.min(intMath, floatMath))
console.log(Math.max(intMath, floatMath))
console.log(Math.abs(floatMath))
console.log(Math.round(floatMath))
console.log(Math.ceil(floatMath))
console.log(Math.floor(floatMath))
console.log(Math.random(100) * 10 - 1)

// Date Function in JavaScript
var date = new Date()
var getDat = date.toDateString()
var getTime = date.toTimeString()
var getLocal = date.toLocaleString()

console.log(getDat)
console.log(getTime)
console.log(getLocal)

console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDate())
