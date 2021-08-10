
//Crear un nuevo nodo
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }

  //Metodo para agregar  un elemento
  enqueue(value) {
    const newNodo = new Node(value);
    if (this.length === 0) {
      this.first = newNodo;
      this.last = newNodo;
    } else {
      //Aquí pega el nodo
      this.last.next = newNodo;
      //Aqui le dice que el ultimo nodo es el nuevo nodo
      this.last = newNodo;
    }
    this.length++;
    return this;
  }
  //metodo para eliminar el primer nodo
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;

    return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);

myQueue.peek();
myQueue.dequeue();
