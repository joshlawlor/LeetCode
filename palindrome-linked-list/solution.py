class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        # Helper function to reverse a linked list
        def reverse_list(node):
            prev = None
            while node:
                next_node = node.next
                node.next = prev
                prev = node
                node = next_node
            return prev

        # Helper function to find the middle of the linked list
        def find_middle(node):
            slow = node
            fast = node
            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next
            return slow

        if not head or not head.next:
            return True  # Empty or single-node list is a palindrome

        # Find the middle of the linked list
        middle = find_middle(head)

        # Reverse the second half of the linked list
        reversed_second_half = reverse_list(middle)

        # Compare the first half with the reversed second half
        while reversed_second_half:
            if head.val != reversed_second_half.val:
                return False
            head = head.next
            reversed_second_half = reversed_second_half.next

        return True