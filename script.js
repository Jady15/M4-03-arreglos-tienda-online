/*
Eres el encargado de gestionar los datos de una tienda online. Tienes un listado de productos con información como nombre, precio y categoría. Tu tarea será filtrar los productos por precio, ordenarlos alfabéticamente y generar una lista con los nombres.

Practicar los métodos filter(), sort(), map(), reduce(), some(), every() e includes() para manipular datos de un arreglo.
*/



//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.
const productos = [
    {
      nombre: "Smartphone Galaxy S23",
      precio: 799.99,
      categoria: "Dispositivos móviles"
    },
    {
      nombre: "Auriculares inalámbricos Bose QC35",
      precio: 299.00,
      categoria: "Accesorios de audio"
    },
    {
      nombre: "Laptop Dell XPS 13",
      precio: 1299.99,
      categoria: "Computadoras"
    },
    {
      nombre: "Smartwatch Apple Watch Series 8",
      precio: 399.50,
      categoria: "Wearables"
    },
    {
      nombre: "Cargador USB-C 65W",
      precio: 39.99,
      categoria: "Accesorios de carga"
    }
  ];

// Usa filter() para obtener los productos que cuesten menos de $100.
const cheapProducts = productos.filter( (producto) => producto.precio < 100);
console.log("MÉTODO filter()");
console.log(cheapProducts);
console.log("----------");

// Usa sort() para ordenar esos productos alfabéticamente por su nombre.
const sortedProducts = productos.sort((a, b) => {
    if(a.nombre < b.nombre) return -1;
    if(a.nombre > b.nombre) return 1;
    return 0;
});
console.log("MÉTODO sort()");
console.log(sortedProducts);
console.log("----------");

// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const productNames = productos.map( (producto) => producto.nombre);
console.log("MÉTODO map()");
console.log(productNames);
console.log("----------");

// reduce(): Conocer el precio total de todos los productos
const totalPrice = productos.reduce((total, producto) => total + producto.precio, 0);
console.log("MÉTODO reduce()");
console.log(totalPrice.toFixed(2));
console.log("----------");

// some(): Verificar si hay algún producto con un precio mayor a $1000
const greaterThan1000 = productos.some((producto) => producto.precio > 1000);
console.log("MÉTODO some()");
console.log(greaterThan1000);
console.log("----------");

// every(): Verificar si todos los productos pertenecen a la categoría "Computadoras"
const allComputers = productos.every((producto) => producto.categoria === "Computadoras");
console.log("MÉTODO every()");
console.log(allComputers);
console.log("----------");

// includes(): Verificar si el nombre de algún producto incluye el nombre de una marca (Apple)
const includeApple = productos.some((producto) => producto.nombre.includes("Apple"));
console.log("MÉTODO some()");
console.log(includeApple);
console.log("----------");


