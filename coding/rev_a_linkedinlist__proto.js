// ============ LIST NODE ============
function ListNode(val) {
    this.val = val;
    this.next = null;
}


// ============ LINKED LIST ============
function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function(val) {
    let newNode = new ListNode(val);
    if (this.head === null) {
        this.head = newNode;
        return;
    }
    let pointer = this.head;
    while (pointer.next) {
        pointer = pointer.next;
    }
    pointer.next = newNode;
}

LinkedList.prototype.reverse = function() {
    if (this.head === null) return;
    if (!this.head.next) return;

    let prev = null;
    let cur = this.head;

    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    this.head = prev;
}

LinkedList.prototype.print = function() {
    let cur = this.head;
    const result = [];
    while (cur) {
        result.push(cur.val);
        cur = cur.next;
    }
    console.log(result.join(" → "));
}


// ============ TESTING ============
const ll = new LinkedList();

ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.reverse();

ll.print();  // 5 → 4 → 3 → 2