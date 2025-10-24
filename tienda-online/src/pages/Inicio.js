
import 'bootstrap/dist/css/bootstrap.min.css';
import Botoncito from "../components/Boton";
import banner from '../assets/bannerPrincipal.avif'
import { useState, useEffect } from 'react';
import { ProductosAlmacenados } from '../components/ProductosAlmacenados';


function Inicio(){
    {/**para que pueda agregar al carrito tambien */}
    const productos = ProductosAlmacenados;
            
        const [carrito,setCarrito] = useState([]);
             
        //funcion agregar un elemento al carrito
        const agregarAlCarrito = (producto)=>{
           const existe = carrito.find((p) => p.id === producto.id);
           let nuevoCarrito;
           if (existe) {
            nuevoCarrito = carrito.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p);
          } else {
            nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
          };
          setCarrito(nuevoCarrito);
          localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
        }
    
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
                                    <Botoncito onClick= {()=>agregarAlCarrito(p)}  texto="Agregar a carrito" />
                                    </div>
                                </div>
                            </div>))};
                </div>
            </div>

            <section className="bg-primary text-white py-5">
                 <div className="container text-center">
                    <h1 className="display-5 fw-bold ">Categorías</h1>
                    <p className="lead ">Tenemos diferentes categorías para explorar y cubrir todas tus necesidades. Encuentra lo que necesitas sólo aqui exclusivamente aquí y en ninguna parte más que aquí.</p>
                </div>
            </section>

             <section className="py-5 ">
                <div className="row justify-content-center text-center">
                    <h1 className="display-6 fw-bold mb-2">Ropa mujer</h1>

                </div>
            </section>
        </div>
  
    );
}
export default Inicio;