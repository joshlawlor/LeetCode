class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        unique_elements = set()
        
        for num in nums:
            if num in unique_elements:
                return True
            unique_elements.add(num)
        
        return False