class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        # Handle the case where k is greater than the length of the array
        k = k % len(nums)
        
        # Reverse the entire array
        self.reverse(nums, 0, len(nums) - 1)
        # Reverse the first k elements
        self.reverse(nums, 0, k - 1)
        # Reverse the remaining elements
        self.reverse(nums, k, len(nums) - 1)

    def reverse(self, nums, start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1