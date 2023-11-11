Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?

    The provided solution already minimizes the number of operations by iterating through the array once and moving non-zero elements to the front. Since the problem requires an in-place solution without making a copy of the array, this approach is optimal in terms of minimizing operations.

    The time complexity of the solution is O(n), where n is the length of the array, making it an efficient and optimal solution for the given constraints.