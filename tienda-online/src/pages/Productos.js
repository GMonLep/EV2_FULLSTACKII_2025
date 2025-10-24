import { ProductosAlmacenados } from "../components/ProductosAlmacenados";
import { useState, useEffect } from "react";
import Botoncito from "../components/Boton";

export default function (){
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
        <section className="bg-primary text-white py-5">
            <div className="container text-center">
            <h1 className="display-5 fw-bold ">Nuestros productos</h1>
            <p className="lead ">Tenemos diferentes productos para explorar y cubrir todas tus necesidades. Encuentra lo que necesitas sólo aqui exclusivamente aquí y en ninguna parte más que aquí.</p>
            </div>
        </section>
    {/**INICIO LISTA PRODUCTOS DISPONIBLES*/}  
    <div className="container py-4">
      <div className='row'>
        {productos.map(p => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body text-center">
                    <div className="fs-1 text-primary">{p.precio.toLocaleString()}</div>
                    <h5 className="mb-3">{p.nombre}</h5>
                    <img className="img-fluid img-thumbnail mb-3 w-75" src={p.img} />
                    <Botoncito onClick= {()=>agregarAlCarrito(p)}  texto="Agregar a carrito" />
                    </div>
                </div>
          </div>
        ))}
      </div>

      {/**FIN LISTA PRODUCTOS DISPONIBLES*/}
        </div>
        </div>
    );
};