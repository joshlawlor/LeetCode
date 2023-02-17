var lengthOfLongestSubstring = function(s="abcabcbb") {
    console.log(s)
    let checklist = []
    let repeatCounter = 0
    for(let i = 0; i < s.length+1; i++){





        
        console.log(checklist)
        
        if(checklist.includes(s[i])){
            console.log('^^^^')
            repeatCounter=(checklist.length)
        }
        checklist.push(s[i])

    }
    console.log(repeatCounter)
};

lengthOfLongestSubstring()


// Have it count alongeach number, if it repeats, store that count in an array
// Then clear your count
// If it repeats again, store the count in the array again
//Clear the count
//When reach end of array, find the largest value in your answerArray