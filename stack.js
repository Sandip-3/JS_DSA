class Stack {
  constructor() {
    this.array = [];
    this.top = -1;
  }

  push(items) {
    this.top++;
    this.array[this.top] = items;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedItems = this.array[this.top];
    this.top--;
    return poppedItems;
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.array[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  size() {
    return this.top + 1;
  }

  clear() {
    this.array = [];
    this.top = -1;
  }
}

const newStack = new Stack()

newStack.push(12);
console.log(newStack.peek());