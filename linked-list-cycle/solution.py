# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        # Base case: empty list or a list with only one node
        if not head or not head.next:
            return False

        # Initialize two pointers, slow and fast
        slow = head
        fast = head.next

        # Move the pointers until they meet or fast reaches the end of the list
        while fast and fast.next:
            if slow == fast:
                return True
            slow = slow.next
            fast = fast.next.next

        # If fast reaches the end, there is no cycle
        return False