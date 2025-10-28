import 'bootstrap/dist/css/bootstrap.min.css';
import Botoncito from "../components/Boton";
import banner from '../assets/bannerPrincipal.avif';
import { useState, useEffect } from 'react';
import { ProductosAlmacenados } from '../components/ProductosAlmacenados';

// Para notificaciones con toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Inicio() {
  const productos = ProductosAlmacenados;
  const [carrito, setCarrito] = useState([]);

  // Función agregar al carrito con toast
  const agregarAlCarritoConToast = (producto) => {
    const existe = carrito.find((p) => p.id === producto.id);
    let nuevoCarrito;
    if (existe) {
      nuevoCarrito = carrito.map((p) =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
      );
    } else {
      nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
    }
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    toast.success(`¡${producto.nombre} agregado al carrito!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Cargar carrito desde localStorage
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  return (
    <div style={{ paddingTop: '0', minHeight: '80vh' }}>
      
      {/* Sección Hero */}
      <section className="bg-primary text-white py-5">
        <div className="row justify-content-center text-center">
          <h1 className="display-2 fw-bold mb-2">Bienvenid@ a mi Tiendita</h1>
          <img className="img-responsive w-50 img-thumbnail mb-4" src={banner} alt="Banner principal" />
        </div>
      </section>

      {/* Productos destacados */}
      <section className="py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Productos destacados</h1>
          <p className="lead">Lo más vendido esta temporada y lo mejor para tu closet.</p>
        </div>
      </section>

      <div className="container py-4">
        <div className="row">
          {productos.slice(0, 3).map((p) => (
            <div key={p.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <div className="fs-1 text-primary">{p.precio.toLocaleString()}</div>
                  <h5 className="mb-3">{p.nombre}</h5>
                  <img className="img-fluid img-thumbnail mb-3 w-75" src={p.img} alt={p.nombre} />
                  <Botoncito onClick={() => agregarAlCarritoConToast(p)} texto="Agregar a carrito" />
                </div>
              </div>
            </div>
          ))}
          <ToastContainer />
        </div>
      </div>

    
    </div>
  );
}

export default Inicio;
