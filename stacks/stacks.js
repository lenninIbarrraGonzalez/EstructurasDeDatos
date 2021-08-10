
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


//creando una clase para instanciarla
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //Metodos
  //Metodo peek regresa el ultimo elemento

  peek() {
    return this.top;
  }

  //Metodo push agregar un elemento
  push(value) {
    const newNode = new Node(value);
    //validar si el stack esta vacio
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      //guardo el apuntador al top anterior
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  //Metodo POP 
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;

    return this;
  }

}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.peek();
myStack.pop();