class Productos {
  constructor({ nombre, precio, stock }) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

    this.validarStock(stock);
    this.sumarIva(precio);
  }

  validarStock() {
    if (this.stock <= 0)
      return console.log(`El producto ${this.nombre} no tiene mas stock`);
  }
  sumarIva() {
    return console.log(
      `El precio del producto ${this.nombre} con el iva incluido es $ ${
        this.precio * 1.21
      }`
    );
  }
  mostrarProductos() {
    console.log(
      `Ficha del Articulo \nNombre:"${this.nombre}"\nPrecio:"${this.precio}"\nStock:"${this.stock}"`
    );
  }
  vender(num) {
    if (this.stock >= num) {
      this.stock = this.stock - num;
      this.validarStock();
      return console.log(
        `Se acaban de vender ${num} unidades del articulo ${this.nombre}\nQuedan ${this.stock} unidades.`
      );
    } else {
      return console.log(
        `No hay suficiente stock de ${this.nombre} quedan ${this.stock} unidades`
      );
    }
  }
}

const remera1 = new Productos({
  nombre: "remera 1",
  precio: 1500,
  stock: 4,
});
const remera2 = new Productos({
  nombre: "remera 2",
  precio: 2000,
  stock: 20,
});
const remera3 = new Productos({
  nombre: "remera 3",
  precio: 3000,
  stock: 5,
});
const remera4 = new Productos({
  nombre: "remera 4",
  precio: 2000,
  stock: 10,
});

remera1.vender(4);
remera4.vender(1);
remera4.mostrarProductos();

// const misProductos = [
//   {
//     nombre: "remera1",
//     precio: 1500,
//     stock: 4,
//   },
//   {
//     nombre: "remera2",
//     precio: 1600,
//     stock: 0,
//   },
//   {
//     nombre: "remera3",
//     precio: 1700,
//     stock: 4,
//   },
//   {
//     nombre: "remera4",
//     precio: 1800,
//     stock: 20,
//   },
// ];

// const art = misProductos.forEach((el) => new Productos(el).mostrarProductos());
