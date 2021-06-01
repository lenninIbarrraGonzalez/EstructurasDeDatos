// const array = ["Lennin", "Geovanny", "Valentina"];
// array.push("ana");

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new MyArray();

myArray.push("Carro");
myArray.push("Moto");
console.log(myArray);
console.log(myArray.get(1));

