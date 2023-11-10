Intersection of Two Arrays II


Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?

    If the arrays are sorted, you can use a two-pointer approach to iterate through both arrays simultaneously, updating pointers based on element comparisons.

What if nums1's size is small compared to nums2's size? Which algorithm is better?

    In this case, using a hash map to count occurrences is still a reasonable approach, as it doesn't rely on the size of the arrays and generally has linear time complexity.

What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

    If the elements are on disk and memory is limited, you can use an external sort or divide-and-conquer strategy to process chunks of the arrays at a time, reducing the memory footprint.