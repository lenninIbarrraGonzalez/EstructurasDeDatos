class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  //hash function auyda a generar el hash -- exiten varios en github
  hashMethod(key) {
    let hash = 0;
    //generar un numero random
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) - i) % this.data.length;
      this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
}
// separo 50 espacios libres - buckets
const myHashTable = new HashTable(50);

//guardando en el bucket de forma random
myHashTable.set("Lennin", 1981);
myHashTable.set("Mario", 1990);
myHashTable.set("Luisa", 1984);
myHashTable.set("Fernanda", 1984);

console.log(myHashTable);