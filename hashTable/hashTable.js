class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  //hash function ayuda a generar el hash -- exiten varios en github
  hashMethod(key) {
    let hash = 0;
    //generar un numero random
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) - i) % this.data.length;
      this.data.length;
    }
    return hash;
  }
  //metodo para agregar elementos al bucket
  set(key, value) {
    const address = this.hashMethod(key);
    //si esta dirección exite 
    if (!this.data[address]) {
      this.data[address] = [];
    }
    //evitar la colision -- no borrar la información
    this.data[address].push([key, value]);
    return this.data;
  }
  //metodo para buscar un elemento
  get(key) {
    const address = this.hashMethod(key);
    //le estamos pasando el indice
    const currentBucket = this.data[address];
    //si existe, si es true
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        //recorriendo un array de arrays
        if (currentBucket[i][0] === key) {
          //retorna eñ valor 
          return currentBucket[i][1];
        }
      }
    }
    //si no encuentra nada
    return undefined;
  }

  //recorriendo un array de arrays
  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }

  remove(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedValue = this.data[address][i];
          this.data[address].splice(i, 1);
          return deletedValue;
        }
      }
    }
    return undefined;
  }

}




// separo 50 espacios libres - buckets
const myHashTable = new HashTable(50);

//probandolo en el navegador se mira el resultado
//guardando en el bucket de forma random
myHashTable.set("Lennin", 1981);
myHashTable.set("Mario", 1990);
myHashTable.set("Luisa", 1984);
myHashTable.set("Fernanda", 1984);
myHashTable.set("Lennin", 1983);
//buscando un valor
myHashTable.get("Lennin");
console.log(myHashTable);