
const x = 121


var isPalindrome = function(x){

    const leftRight = (""+x).split("").map(Number).reverse();
    const rightLeft = leftRight.reverse()
    console.log(leftRight, rightLeft)
    
    
}

isPalindrome(-121)

//First, need to map over the array, and push each letter into two seperate arrays
// The first array in regular order, the second array reversed order
// Then compare those two arrays, if they match it is palindrome
 