// Strings in JavaScript
var str = 'I Love JS'                           // String Literal
console.log(str)

var str1 = String('I Love Python Too')          // String Constructor
console.log(str1)       

var n = 420
var nToString = n + ''
var nConvert = n.toString()                     // Type Conversion
console.log(nToString)
console.log(nConvert)

// Escape Notation
var value = '\tMosharaf Hossain\n'             // Tab & New Line 
var number =  4234

console.log(value)
console.log(number)

// String Comparison
var a = 'a'
var b = 'B'                                     // JavaScript Lexicographic System
console.log(a > b)

// String Method
var firstName = 'Mosharaf'
var lastName = 'Hossain'
var finalName = firstName.concat(' ', lastName)     // Concat Method
console.log(finalName)

console.log(finalName.toUpperCase())                // Uppercase Method
console.log(finalName.toLowerCase())                // Uppercase Method

console.log(finalName.substr(0, 11))                // Substring Method
console.log(firstName.charAt(3))                    // Character At Method
console.log(finalName.startsWith('Mosharaf'))       // Starts With Method
console.log(finalName.endsWith('Hossain'))          // Ends With Method

var space = '       Hello World       '
console.log(space.trim())                           // To Trim Leading and Trailing Space
console.log(space.trimStart())                     // To Trim Leading Space
console.log(space.trimEnd())                      // To Trim Trailing Space

var splitting = 'Mosharaf Hossain'               // Split a String
console.log(splitting.split(' '))


// String Length
var str = 'Mosharaf Hossain'
var length = 0

while(true){
    if(str.charAt(length)==''){
        break
    }else{
        length++
    }
}

console.log(length)

if(length > 15){
    console.log('Please Short Your Name')
}else{
    console.log('Welcome Home')
}


