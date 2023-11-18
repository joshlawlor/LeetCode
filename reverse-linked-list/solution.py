# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        # Base case: empty list or last node reached
        if head is None or head.next is None:
            return head

        # Reverse the rest of the list
        reversed_list = self.reverseList(head.next)

        # Adjust pointers for the current node
        head.next.next = head
        head.next = None

        return reversed_list