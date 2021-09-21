// For Loop in JavaScript
for(var i = 0; i <= 10; i++){
    console.log(i +'.'+ 'I Love JavaScript')
}

// While Loop in JavaScript
var i = 0
while(i < 10){
    console.log('The Number is: ' + i)
    i++
}

var isRunning = true
while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand == 7){
        console.log('You got lucky 7')
        isRunning = false
    }else{
        console.log('Thanks for trying ' + rand)
    }
}

// Do While Loop in JavaScript
var init = 0
do{
    console.log(init + ' I Love JS')
    init++
}
while(init <= 10)

// Nested Loop in JavaScript
for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
        console.log('\tInner Loop')
    }
    console.log('Outer Loop')
}

