class ListNode {
    value: string
    next: ListNode
}

class List {
    head: ListNode
    tail: ListNode

    constructor() {
        this.head = null;
        this.tail = null;
    }

    length(): number {
        let current: ListNode = this.head;
        let i: number = 1;

        if (!this.head) {
            return 0;
        }

        while (current.next !== this.head) {
            i++;
            current = current.next;
        }

        return i;
    }

    append(value: string) {
        const newListNode: ListNode = {
            value: value,
            next: this.head
        }

        if (this.length() === 0) {
            this.head = newListNode;
            newListNode.next = newListNode;
            return;
        }

        if (this.length() === 1) {
            this.head.next = newListNode;
        } else {
            this.tail.next = newListNode;
        }

        this.tail = newListNode;
    }

    checkIndex(index: number) {
        if (index < 0 || index > this.length()) {
            throw new Error('Incorrect index');
        }
    }

    insert(value: string, pos: number) {
        if (pos === this.length()) {
            this.append(value);
            return;
        }

        this.checkIndex(pos);

        const newListNode: ListNode = {
            value: value,
            next: null
        }

        if (pos === 0) {
            const tmpNext: ListNode = this.head;
            this.head = newListNode;
            this.head.next = tmpNext;
            return;
        }

        let current: ListNode = this.head;
        let i: number = 0;

        while (i !== pos-1) {
            i++;
            current = current.next;
        }

        const tmpNext: ListNode = current.next;

        current.next = newListNode;
        newListNode.next = tmpNext;
    }

    delete(pos: number): string {
        this.checkIndex(pos);

        let current: ListNode = this.head;
        let i: number = 0;

        if (pos == 0) {
            const value: string = this.head.value; 
            this.head = this.head.next;
            return value;
        }

        while (i !== pos-1) {
            i++;
            current = current.next;
        }

        // if (pos == this.length()-1) {
        //     current.next = null;
        //     return;
        // }

        const value: string = current.next.value;
        current.next = current.next.next;
        return value;
    }

    deleteAll(value: string) {
        let current: ListNode = this.head;

        for (let i: number = 0; i < this.length(); i++) {
            if (current.value == value) {
                this.delete(i);
            }
            current = current.next;
        }
    }

    get(pos: number): string {
        this.checkIndex(pos);

        let current: ListNode = this.head;

        for (let i: number = 0; i < this.length(); i++) {
            if (i == pos) {
                return current.value;
            }
            current = current.next;
        }
    }

    clone(): List {
        const newList: List = new List();
        let current: ListNode = this.head;

        for (let i: number = 0; i < this.length(); i++) {
            newList.append(current.value);
            current = current.next;
        }

        return newList;
    }

    reverse() {
        const current: ListNode = this.head;
        
    }

    findFirst(value: string): number {
        let current: ListNode = this.head;

        for (let i: number = 0; i < this.length(); i++) {
            if (current.value == value) {
                return i;
            }
            current = current.next;
        }

        return -1;
    }

    findLast(value: string): number {
        let pos: number = -1;
        let current: ListNode = this.head;

        for (let i: number = 0; i < this.length(); i++) {
            if (current.value == value) {
                pos = i;
            }
            current = current.next;
        }

        return pos;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    extend(otherList: List) {
        let current: ListNode = otherList.head;

        for (let i: number = 0; i < otherList.length(); i++) {
            this.append(current.value);
            current = current.next;
        }
    }

}

export default List;