type QNode<T> = {
    value: T;
    next?: QNode<T>;
}

class NodeQueue<T> {
    private head?: QNode<T>;
    private tail?: QNode<T>;
    public length: number;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(newValue: T): void {
        const node = { value: newValue } as QNode<T>;
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const removedHead = this.head;
        this.head = this.head.next;

        //cleanup
        removedHead.next = undefined;

        // cleanup tail if their is nothing
        if (this.length === 0) {
            this.tail = undefined;
        }

        return removedHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

