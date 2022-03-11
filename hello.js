// console.log('Hello world')

// var name="Sri"

// var age = 10
// console.log(age)

// var num1= 10
// var num2 = 30
// console.log(num1+num2)

// console.log(100*43)

// var num=100
// console.log(num++)
// console.log(num)
// num++;

// console.log(num)
// num++
// console.log(num)
// num--
// console.log(num)

// console.log(++num)

// console.log(13*6)
// console.log(10 < 100)

// var num = 45
// if(num < 100) {
//     console.log('Number is lesser than 100')
// }

// for(var i=0; i<10; i++) {
//     console.log('The number is '+i+' now')
// }


for(var i =9; i<5; i++) {
    console.log(' hello...')
}


// if() {

//}

// var hobbies = 'sports', 'reading', 'writing'
var hobbies = ['sports', 'reading', 'writing'] // index of array start from 0
var numbers = [1,2,3,4,5]
// console.log(hobbies[0])
// console.log(numbers[3])
//console.log(hobbies.length)
console.log(hobbies)
//hobbies.pop()
//hobbies.push('new value')
hobbies.unshift('new value')

console.log(hobbies)

//if else
// for
// switch 
var value = 120;
switch(value) {
    case 1: console.log('The value is 1')
    break;
    case 2: console.log('The value is 2')
    break;
    case 3: console.log('The value is 3')
    break;
    default: console.log('reached default')
    break;
}

// ternary operator
//var x = 1
//console.log(x >= 10 ? 'I have two digits' : 'I have a single digit')
// while loop
// var i = 0;
// while(i<=10) {
//     i++;
//     if(i == 5) {
//         continue
//     }
//     console.log('The value is now :'+i)
// }

var char = 10

//person
// name
// age
// address
// email
// phone

//country
// name
// capital
// population
// national sports
// national flag

key: value
name:  'Adam'
age: 10
email: 'adam@test.com'

var adam = {
    name: 'Adam',
    age: 25,
    email: 'adam@test.com',
    phone: 1234567890,
    hobbies: ['sports', 'cooking'],
    address: {
        address1: '123 Main St',
        address2: 'Apt 200',
        city: 'San Jose',
        state: 'CA',
        zip: 95132
    }
}

var eve = {

    name: 'eve',
    age: 26,
    email: 'eve@test.com'
}

var mycar = {
    type: 'sedan',
    model: 'camry',
    year: 2022,
    doors: 4,
    hasSunRoof: true
}

//console.log(adam.address.city)
//console.log(eve.age)

//console.log(mycar['year'])
//console.log(adam['address']['state'])

// {
//     key: 'value',
//     key1: 'value1',
//     key2: 'value2'
// }

//JSON - javascript object notation


// console.log(payload[1].address)


// let persons = [1,19,55,44,24]
// person = [12,454]

//var - const or let

let name = 'Shan'
//console.log(name)
let y = 'Adam'
//console.log(y)
y = 'Eve'
name='Sri'

//console.log(name)
//console.log(y)

//console.log(name)

const persons = [
    {
        name:'Shan',
        address: {
            address1: '123 Main St'
        }
    },
    {
            name: 'Sri',
            address: {
                address1: '123 Main St'
            }
    },
    {
        name: 'Adam'
    }
]

//console.log(persons[1].address.address1)

// const x = 10
// const y = 20
// console.log(x+y)

function printSomething() {
   return  10+20
}

console.log(printSomething());

function functionName() {

}

function addNumbers(a, b, c) {
    return a + b + c
}

function multiplyNumbers(x1, y1) {
    return x1 * y1
}

function getSquare(a) {
    return a * a
}
console.log(addNumbers(10,60,35))

const greeting =  function (name) {
    return 'Hello, '+name
}
console.log(greeting('Shan'))

// find the area of rectangle 
