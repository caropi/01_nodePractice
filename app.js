// EMITTING TUTORIAL
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => {
//     console.log(num1+num2);
// })
// eventEmitter.emit('tutorial', 1,2);

// class Person extends EventEmitter {
//     constructor(name) {
//         super();
//         this._name = name
//     }
//     get name() {
//         return this._name
//     }
// }

// let pedro = new Person('Pedro');
// let christina = new Person('Christina');
// pedro.on('name', () => {
//     console.log(`my name is ${pedro.name}`);
// })
// christina.on('name', () => {
//     console.log(`my name is ${christina.name}`);
// })

// pedro.emit('name')
// christina.emit('name')

// READLINE INTERFACE TUTORIAL
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1)
let num2 = Math.floor((Math.random() * 10) + 1)
let answer = num1 + num2
rl.question(`What is ${num1} + ${num2}?\n`, 
(userInput) => {
    if(userInput.trim() == answer) {
        rl.close();
    }
    else {
        rl.setPrompt('Incorrect response, please try again \n')
        rl.prompt();
    }
})

rl.on('close', () => {
    console.log('Correct!');
})
