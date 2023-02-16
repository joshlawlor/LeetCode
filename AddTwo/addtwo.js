var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var remainder = 0;
    var current = new ListNode();
    var result = current;
    while (l1 !== null || l2 !== null || remainder > 0) {
        var sum = remainder;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        remainder = Math.floor(sum / 10);
        current.next = new ListNode(Math.floor(sum % 10));
        current = current.next;
    }
    return result.next;
}
;
addTwoNumbers();
console.log('Hello');
