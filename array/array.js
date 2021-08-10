// const array = ["Lennin", "Geovanny", "Valentina"];
// array.push("ana");

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //metodo para leer un elemento segun su posición
  get(index) {
    return this.data[index];
  }
  //metodo para agregar un elemento al final
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  //metodo para eliminar un elemento
  pop() {
    //se resta uno para optener la posicion del ultimo elemento (3 elementos ultima posicion 2)
    // lastItem sirve para mostrar cual fue el Elemento que se elimino
    const lastItem = this.data[this.length - 1];
    //borramos el elemento
    //delete es un keywork no un llamado a la función delete, palabra reservada que borra un elemento
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  //metodo delete
  delete(index) {
    //guardo en una cosntante el valor para mostrarlo
    const item = this.data[index];
    //llamo al metodo y le paso el valor del index
    this.shiftIndex(index);
    return item;
  }
  //metodo para reorganizar los indixes
  shiftIndex(index) {
    //i = index inicia la busqueda desde el indixe ahorrando tiempo de busqueda
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    //borra el ultimo elemento ya que sobre escribio el valor
    delete this.data[this.length - 1];
    this.length--;
  }

  //metodo para agregar al inicio
  addFirst(item) {
    this.unshiftIndex(item);
    this.data[0] = item;
    return item;
  }
  //organiza los indixes ascendentemente
  unshiftIndex(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.length++;
  }
  //metodo que borra el primer elemento
  shift(){
    this.shiftIndex(0);
  }

}

const myArray = new MyArray();

myArray.push("Carro");
myArray.push("Moto");
myArray.push("Bicicleta");
myArray.push("Patineta");

// myArray.pop();
//myArray.delete(1);
// myArray.addFirst("Aviones");
myArray.shift();
console.log(myArray);
//console.log(myArray.get(1));

