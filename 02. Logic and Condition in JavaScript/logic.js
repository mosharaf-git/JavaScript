// If Else if Else Condition in JavaScript
var a = 10
var b = 20
var c = 30

if(a > b){
    console.log("(a < b) This Statement is True")
}else if(c > a){
    console.log("(c > a) This Statement is also True")
}else{
    console.log("Nope! This Statement is False")
}


// Switch Statement
var date = new Date()
var today = date.getDay()

switch (today) {
    case 0:
        console.log('Today is Sunday')
        break

    case 1:
        console.log('Today is Monday')
        break

    case 2:
        console.log('Today is Tuesday')
        break

    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break

    case 5:
        console.log('Today is Friday')
        break

    case 6:
        console.log('Today is Saturday')
        break

    default:
        console.log('Enter Valid Number!!')
        break
}

// Ternary Operator
var n = 10
var result = n%2 == 0 ? 'Even' : 'Odd'

console.log(result)

