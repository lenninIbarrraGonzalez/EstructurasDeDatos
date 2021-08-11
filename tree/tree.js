//         10
//   4             20
// 2   8         17  170

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    //al hacer el primer llamado a esta clase se crea el primer elemento root en null
    this.root = null;
  }
  //Metodo Insert
  insert(value) {
    const newNode = new Node(value);
    //Preguntamos si es el primer elemento
    if (this.root === null) {
      this.root = newNode;
    } else {
      //variable para recorrer el arbol
      let currentNode = this.root;
      //con este while recorro el arbol
      while (true) {
        //si el valor enviado es menor al root
        if (value < currentNode.value) {
          //valido que el nodo no tenga hijos
          if (!currentNode.left) {
            //le agrego al nodo el hijo hacia la derecha por ser menor
            currentNode.left = newNode;
            return this;
          }
          //cambio el valor a comparar que inicio con el root
          currentNode = currentNode.left;
        } else {
          //si no exite un nodo a la derecha
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);