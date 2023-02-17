var lengthOfLongestSubstring = function (s = "") {
  let checklist = [];
  let answerCounter = [];
  let letterCount = 0;
  if(s == ""){
    return console.log(0)
}

  for (let i = 0; i < s.length + 1; i++) {
    
    if (checklist.includes(s[i])) {
      answerCounter.push(letterCount);
      letterCount = 0;
    }

    if (i == s.length) {
      //Find largest value in answerCounter

      answerCounter.sort();
      answer = answerCounter[answerCounter.length - 1];
      return answer;
    }

    letterCount++;

    checklist.push(s[i]);
  }
};

lengthOfLongestSubstring();

// Have it count alongeach number, if it repeats, store that count in an array
// Then clear your count
// If it repeats again, store the count in the array again
//Clear the count
//When reach end of array, find the largest value in your answerArray
