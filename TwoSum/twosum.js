
//EXAMPLE 1
const nums = [2,7,11,15]
const target = 9

//EXAMPLE 2
// const nums = [3,2,4]
// const target = 6

//EXAMPLE 3
// const nums = [3,3]
// const target = 6

var twoSum = function(nums=[3,2,4], target=6) {

    const index = {}

    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if(diff in index) return console.log([i,index[diff]])

        index[nums[i]] = i
    }

}

twoSum()