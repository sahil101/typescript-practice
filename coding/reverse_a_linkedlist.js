class ListNode {
  val;
  next;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head;
  constructor() {
    this.head = null;
  }

  add(val) {
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

  reverse() {
    if (this.head == null) return;
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

  print() {
    let cur = this.head
    while(cur) {
        console.log(cur.val)
        cur = cur.next
    }
  }
}


ll = new LinkedList()

ll.add(2)
ll.add(3)
ll.add(4)
ll.add(5)
ll.reverse()

ll.print()


