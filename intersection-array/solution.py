from collections import Counter

class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        # Count occurrences of each element in nums1 and nums2
        count1 = Counter(nums1)
        count2 = Counter(nums2)

        # Find the common elements and their counts
        common_elements = count1 & count2

        # Build the result list
        result = []
        for num, count in common_elements.items():
            result.extend([num] * count)

        return result