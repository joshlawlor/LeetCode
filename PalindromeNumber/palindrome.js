
const x = 121


var isPalindrome = function(){

    const leftRight = (""+x).split("").map(Number).reverse();
    const rightLeft = (""+x).split("").map(Number);


    const array = Array.from(x.toString()).map(Number).reverse()
    const array2 = Array.from(x.toString()).map(Number)


    console.log('Array'+array+array2)

    console.log(leftRight, rightLeft)
    
    // if(array != array2){
    //     return console.log(false)
    // }
    // else{
    //     return console.log(true)
    // }


    for (let i = 0; i < array.length; i++){
        if (array[i] != array2[i]){
            return console.log(false)
        }else {
            return console.log(true)
        }
    }
}

isPalindrome(x)

//First, need to map over the array, and push each letter into two seperate arrays
// The first array in regular order, the second array reversed order
// Then compare those two arrays, if they match it is palindrome
 