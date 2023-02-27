const s =["I", "I", "I"]

const romanValues =
{
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}



var romanToInt = function(s) {

    answer = 0;

    for(let i = 0; i < s.length; i+=1){
        romanValues[s[i]] < romanValues[s[i+1]] ? answer -= romanValues[s[i]]: answer += romanValues[s[i]]
    }
    return console.log(answer)

    //First I am going to define a set of values that align with the correct roman integer
    // Then inside my function, I will go through the entire test case array with a for loop
    // I will compare the s[i] with my roman values, if there is a match it will add that value to
    // my running answer 
    
};

romanToInt(s)