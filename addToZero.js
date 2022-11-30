
// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// For example:

// [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

// [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

// [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.

// Starting array
let array = [28, 43, -13, 30, 4, 0, 12]

// Write your solution below:

const anyValuesAddToZero = arr => {

    let doesAddToZero = false
    
    arr.forEach((value, index) => {
        for (i in arr) {
            if (value + arr[i] === 0 && index != i){
                doesAddToZero = true
                break
            } 
        }
    })
    return doesAddToZero
}

console.log(anyValuesAddToZero(array))