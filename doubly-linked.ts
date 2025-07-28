
type Item<T> = {
    value: T,
    next?: Item<T>,
    prev?: Item<T>
}

class DoublyLinkedList<T> {
    private length: number;
    private head?: Item<T>;
    private tail?: Item<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    getLength(): number {
        return this.length;
    }

    prepend(value: T): void {
        this.length++;
        let item: Item<T> = { value: value };

        if (!this.head || !this.tail) {
            this.head = this.tail = item;
            return;
        }

        this.head.prev = item;
        item.next = this.head;
        this.head = item;
    }

    append(value: T): void {
        this.length++;
        let item: Item<T> = { value: value };

        if (!this.head || !this.tail) {
            this.head = this.tail = item;
            return;
        }

        this.tail.next = item;
        item.prev = this.tail;
        this.tail = item;
    }

    insertAt(idx: number, value: T): void {
        if (idx < 0 || idx > this.length - 1) {
            throw new Error('invalid index you dummy');
        }

        if (idx === 0) {
            this.prepend(value);
            return;
        }

        if (idx === this.length - 1) {
            this.append(value);
            return;
        }

        const item: Item<T> = { value: value };
        let curr: Item<T> | undefined = this.getAt(idx);

        if (!curr) {
            return;
        }

        this.length++;


        item.next = curr;
        item.prev = curr.prev;
        curr.prev = item;

        if (item.prev) {
            item.prev.next = item;
        }
    }

    removeAt(idx: number): T | undefined {
        let curr: Item<T> | undefined = this.getAt(idx);

        if (!curr) {
            return undefined;
        }


        return this.removeItem(curr);
    }

    remove(value: T): T | undefined {
        let curr: Item<T> | undefined = this.head;

        for (let index = 0; curr && index < this.length - 1; index++) {
            if (curr.value = value) {
                break;
            }
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        return this.removeItem(curr);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    private getAt(idx: number): Item<T> | undefined {
        if (idx < 0 || idx > this.length - 1) {
            throw new Error('invalid index');
        }

        let curr: Item<T> | undefined = this.head;

        for (let index = 0; curr && index < idx; index++) {
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        return curr;
    }

    private removeItem(item: Item<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (item.next) {
            item.next.prev = item.prev;
        }

        if (item.prev) {
            item.prev.next = item.next;
        }

        //could be optimizied to cut out unnessesary operations
        if (item === this.head) {
            this.head = item.next;
        }

        if (item === this.tail) {
            this.tail = item.prev;
        }

        return item.value;
    }
}


const list = new DoublyLinkedList();

list.append(5);
list.append(2);
list.append(11);

console.log(list.get(2) === 11);
console.log(list.getLength() === 3);

list.prepend(30);

console.log(list.get(0) === 30);
console.log(list.getLength() === 4);


list.insertAt(0, 0);
list.insertAt(3, 3);

console.log(list.get(0) === 0);
console.log(list.get(3) === 3);

list.insertAt(list.getLength() - 1, 100);
console.log(list.get(list.getLength() - 1) === 100);

console.log(list.getLength() === 7);

list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
console.log(list.removeAt(3) === 3);
console.log(list.getLength() === 9);
console.log(list.get(2) === 2);
console.log(list.get(3) === 4);

console.log(list.remove(2) === 2);
console.log(list.get(2) === 4);
