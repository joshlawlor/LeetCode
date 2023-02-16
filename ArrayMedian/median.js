
var findMedian = function(nums1=[1,2],nums2=[3,4]){
const merged = [...nums1, ...nums2]
console.log(merged)

const median = arr => {
    const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a,b) => a-b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

console.log(median(merged))

}


findMedian()