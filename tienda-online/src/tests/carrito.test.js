import destacado1 from '../assets/destacado1.jpg';

describe("Carrito de Compras", () => {
  let carrito = [];

  const agregarProducto = (producto) => {
    const existe = carrito.find(p => p.id === producto.id);
    if (existe) {
      existe.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
  };

  beforeEach(() => {
    carrito = [];
  });

  it("Agregar producto y aumentar cantidad", () => {
    agregarProducto({
        id: 1,
        precio: 49990,
        nombre: "Polera Crop Top Algódon",
        categoria: "Ropa mujer",
        img: destacado1});
    agregarProducto({
        id: 1,
        precio: 49990,
        nombre: "Polera Crop Top Algódon",
        categoria: "Ropa mujer",
        img: destacado1
    });
    expect(carrito[0].cantidad).toBe(2);
  });
});
