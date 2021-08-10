//visualmente como se ve
// 1 --> 2 --> 3 --> 4 -->5 --> null


//Estructura visual de como se veria una list
// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: {
//             value: 5,
//             next: null
//           }
//         }
//       }
//     }
//   }
// }


//clase nodo para agregar un nodo
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  //inicia la estructura de datos con un valor Value
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    //como es el primer elemento apunta a la cabeza
    this.tail = this.head;
    //como forzamos a que haya un valor inicial va el tamaño en 1
    this.length = 1;
  }

  //metodo para agregar un elemento al final
  append(value) {
    //instancia de la clase Node y le pasamos el value
    const newNode = new Node(value);
    //le decimos a la cola que agregue el nodo, este ya tiene su propio next 
    this.tail.next = newNode;
    //posicionamos el tail al nuevo nodo
    this.tail = newNode;
    //crece la longitud de la lista
    this.length++;

    return this;
  }

  //agregando un elemento al inicio
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  //Agregando nodos intermedios
  //controlar el garbash collector
  //asegurar  que todos los nodos queden con un pointer
  insert(index, value) {
    //si el valor del indice es mayor a la longitud lo agrega de último
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    //primer pointer guarda el pointer del elemento anterior a donde vamos a insertar
    const firstPointer = this.getTheIndex(index - 1);
    //es el segundo pointer, el nodo que va después del que vamos a agregar
    const holdingPointer = firstPointer.next;
    //unimos el first pointer con el nuevo nodo
    firstPointer.next = newNode;
    //unimos el nuevo nodo con el segundo pointer
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }

  //Metodo para buscar un nodo
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}



let myLinkedList = new MySinglyLinkedList(1);


myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.prepend(0);
myLinkedList.insert(2, 5);
console.log(myLinkedList);