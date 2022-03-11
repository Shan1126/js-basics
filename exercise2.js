// find the area of rectangle
function area_rectangle(l,b){
    return 2*(parseInt(l, 10)+b)
}
//console.log(area_rectangle('10',5))


function isEven(num) {
 // if it is even retrun true
 //other wise false

 if(num % 2 == 0) {
     return true
 }
 return false
}

//console.log(isEven(11))



// write a function that checks if a name is present in an array
const arrOfNames = ['Shan', 'Sri', 'Antony', 'Adam', 'Ram']

function checkIfNamePresent(name) {
    if(arrOfNames.indexOf(name) > -1) {
        return true
    }
    return false;
}


console.log(checkIfNamePresent('Sri'))

//find area of square  - a*a
