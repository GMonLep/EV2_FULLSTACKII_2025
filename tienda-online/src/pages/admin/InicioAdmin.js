import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Inicio(){

    return(

    <div className="bg-primary" style={{ paddingTop: '0', minHeight: '100vh' }}>
      {/* SECCION ENCABEZADO */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold"> Bienvenido Admin.</h1>

          <div className="container bg-primary ms-0 mt-5">
            <div className="row ms-50">
                <div className="row-4 text-white text-center ">
                    <div className="col mb-4">
                        <a href="./"><button className="btn btn-dark fw-bold btn-lg" >👤 Usuarios</button></a>
                    </div>
                    <div className="col mb-4">
                        <a href="./"><button className="btn btn-dark fw-bold btn-lg" >📑 Órdenes</button></a>
                    </div>
                    <div className="col mb-4">
                        <a href="./Reportes"><button className="btn btn-dark fw-bold btn-lg" >📈 Reportes</button></a>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
      </section>

        
    </div>
    );
}
export default Inicio