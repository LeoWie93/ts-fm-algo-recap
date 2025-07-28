
type RingItem<T> = {
    value: T
}

class Ringbuffer<T> {
    private buffer: Array<string>;
    private length: number;
    private overflow: boolean;
    private head?: number;
    private tail?: number;

    constructor(length: number = 10, overflow: boolean = false) {
        this.buffer = [];
        this.length = this.buffer.length;
        this.head = this.tail = 0;
        this.overflow = overflow;
    }

    add(value: T): void {
        const item: RingItem = { value: value };

        // handle head and tail are the same
        if (this.head && this.tail && this.head === this.tail) {
            this.buffer[this.tail] = item;
        }
        // get next head
        // current head = newItem
        // head = nextHead
    }

    read(): T {
        // handle check if head and tail are same
        // get next tail
        // get current tail item
        // empty current tail position
        // currTail = next tail
        // return item.value
    }
}

