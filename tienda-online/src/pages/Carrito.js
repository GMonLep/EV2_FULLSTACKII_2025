import { useState, useEffect} from "react";

export default function Carrito(){
    
    const [carrito,setCarrito] = useState([]);
     
    useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

    const eliminarDelCarrito = (index) => {
      const nuevoCarrito = carrito.filter((_, i) => i !== index);
      setCarrito(nuevoCarrito);
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); 
    };


    const total = carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
    return (
      <div style={{paddingTop: '0', minHeight: '80vh'}}>
        <section className="bg-primary text-white py-5">
                 <div className="container text-center">
                    <h1 className="display-5 fw-bold ">Carrito de compra</h1>
                </div>
            </section>
      
    <div className='container py-4'>
      {carrito.length === 0 ? (
        <p className='text-muted'>Tu carrito esta vacío</p>
      ):(
      <ul className='list-group mb-3'>
      {carrito.map((item,index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
  <div className="d-flex align-items-center">
    <img src={item.img} alt={item.nombre} style={{width: "auto",height: "60px",objectFit: "cover",marginRight: "10px",}}/>
    <span className="text-primary fw-bold">{item.nombre}</span>
    
    
  </div>

  <div>
    <span className=" text-primary fw-bold px-5">  x {item.cantidad}</span>
    <span className="me-3 px-5">
          ${(item.precio * item.cantidad).toLocaleString()}
        </span>
    
    <button
      className="btn btn-danger btn-sm"
      onClick={() => eliminarDelCarrito(index)}
    >
      Eliminar
    </button>
  </div>
</li>

      ))}
      </ul>
      )}

      
     

      {/**INICIO MOSTRAR TOTAL */}
      <div className='alert alert-primary'>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span> Total:  <strong>${total.toLocaleString()}</strong></span>
        <button className="btn btn-success fw-bold btn-lg">Pagar</button>
        </li>
      </div> 
      {/**FIN MOSTRAR TOTAL */}

      
    </div>
    </div>
  );

}