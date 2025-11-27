import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Reportes from "../Reportes"
import { useEffect } from "react";

function Inicio(){
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (!usuario || usuario.rol !== "admin") {
      window.location.href = "/inicio-sesion";
    }
  }, []);
  const cerrarSesion = () => {
    localStorage.removeItem("usuario")
    window.location.href = "/inicio-sesion";
  };

    return(

    <div className="bg-primary" style={{ paddingTop: '0', minHeight: '100vh'}}>
      {/* SECCION ENCABEZADO */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold"> Bienvenido Administrador</h1>

          <div className="container bg-primary ms-0 mt-5">
            <div className="row ms-50 text-center py-3">
                <span className="col ml-0">
                    <div className="row bg-primary">
                        <a className="mb-4" href="./usuarios"><button className="btn btn-dark fw-bold btn-lg" >👤 Usuarios</button></a>
                        <button className="btn btn-light fw-bold btn-lg mt-5" onClick={cerrarSesion}>Cerrar sesión</button>
                    </div>
                </span>
                <span className="col-sm-10" ><Reportes/></span>
         
             </div>
            <div className="row ms-50">
                <div className="row-4 text-white text-center ">
                    <div className="col mb-4">
                        
                    </div>
                    <div className="col mb-4">
                        
                    </div>
                    <div className="col mb-4">
                        
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