
import 'bootstrap/dist/css/bootstrap.min.css';
import Botoncito from "../components/Boton";
import banner from '../assets/bannerPrincipal.avif'
import { useState, useEffect } from 'react';
import { ProductosAlmacenados } from '../components/ProductosAlmacenados';

//para que notifique con toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Inicio(){
    {/**para que pueda agregar al carrito tambien */}
    const productos = ProductosAlmacenados;        
    const [carrito,setCarrito] = useState([]);
        
    //funcion agregar un elemento al carrito con toasts
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

    
        useEffect(() => {
          const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
          setCarrito(carritoGuardado);
        }, []);
        
    
    return(
        
        
        <div style={{paddingTop: '0', minHeight: '80vh'}}>
            {/**Sección Hero*/}
            <section className="bg-primary text-white py-5 ">
                <div className="row justify-content-center text-center">
                    <h1 className="display-2 fw-bold mb-2">Bienvenid@ a mi Tiendita </h1>
                    <img className="img-responsive w-50 img-thumbnail mb-5" src={banner} />
                    <div>
                    <button className="btn btn-light btn-lg fw-bold border-top-0 text-primary" onClick={() => (window.location.href = "/productos")}>Ver más productos</button>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container text-center">
                    <h1 className="display-5 fw-bold ">Productos destacados</h1>
                    <p className="lead ">Lo más vendido esta temporada y lo mejor para tu closet.</p>
                </div>
            </section>
            <div className="container py-4">
                <div className='row'>
                    {productos.slice(0,3).map(p => (
                        <div key={p.id} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="fs-1 text-primary">{p.precio.toLocaleString()}</div>
                                    <h5 className="mb-3">{p.nombre}</h5>
                                    <img className="img-fluid img-thumbnail mb-3 w-75" src={p.img} />
                                    <Botoncito onClick= {()=>agregarAlCarritoConToast(p)}  texto="Agregar a carrito" />
                                    </div>
                                </div>
                            </div>))}
                            <div><ToastContainer /> </div>
                </div>
            </div>

            <section className="bg-primary text-white py-5">
                 <div className="container text-center">
                    <h1 className="display-5 fw-bold ">¡Encuentrános aquí!</h1>
                    <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Mall%20Costanera,%20Puerto%20Montt,%20Chile+(La%20Tiendita)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">interaktive Bevölkerungskarte</a></iframe>
                </div>
            </section>

        </div>
  
    );
}
export default Inicio;