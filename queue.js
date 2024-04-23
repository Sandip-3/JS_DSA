class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = -1;
  }

  enqueue(items) {
    this.rear++;
    this.queue[this.rear] = items;
  }

  dequeue() {
    if (this.rear < this.front) {
      return "Queue is empty";
    }
    const dequeueItem = this.queue[this.front];
    this.front++;
    return dequeueItem;
  }

  isEmpty() {
    return this.front > this.rear;
  }

  size() {
    return this.rear - this.front + 1;
  }

  clear() {
    this.array = [];
    this.front = 0;
    this.rear = -1;
  }
}
