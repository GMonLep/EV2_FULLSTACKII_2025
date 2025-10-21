import { useState } from "react";
import Botoncito from "./Boton";

export default function TarjetaProducto({producto}){
    return(
    <div className="col-md-4 mb-4">
        <div className="card h-100">
            <div className="card-body text-center">
                <div className="fs-1">{producto.precio}</div>
                <h5>{producto.nombre}</h5>
                <img src={producto.imagen} alt={producto.nombre} />
                <Botoncito texto="Agregar a carrito" />
                </div>
            </div>
        </div>
    );
}
