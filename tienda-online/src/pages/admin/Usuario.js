import React, {useState} from "react";
import axios from "axios";
import ListaUsuario from "./ListaUsuario";

const API_URL = "https://usuarioservice-p81j.onrender.com/api/usuarios";


export default function Usuario(){
    const [nombre, setNombre] = useState("");
    const [rol, setRol] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const guardar = async () => {
      await axios.post(API_URL, {
        nombre,
        rol,
        correo,
        contrasenia
      });
      window.location.reload();
    };



    return(
     <div style={{paddingTop: '0', minHeight: '80vh'}}>
        <section className="bg-primary text-white py-5">
                 <div className="container text-center">
                    <h1 className="display-5 fw-bold ">Monitoreo usuarios</h1>
                    <p className="lead ">Portal diseñado para monitorear y editar información de usuarios registrados, cualquier acción tomada por el administrador es definitiva. Por favor asegurarse de que la información editada esté correcta antes de confirmar. A continuación los apartados.</p>
                </div>
               
            </section>
            <section className="text-dark ">
                 <div className="container text-center">
                    <h1 className="display-6 fw-bold py-5 ">Guardar usuarios nuevos</h1>
                </div>
               
            </section>
      <div className="row text-center py-5 bg-dark my-4">
        <span className="col px-5">
          <span className="col-sm-6" ><div className="my-4">
            <input
            className="form-control"
            placeholder="Rol"
            value={rol}
            onChange={(e)=> setRol(e.target.value)}
            />
        </div></span>
        </span>
        
        <span className="col-lg-5" ><div className="my-4">
            <input
            className="form-control"
            placeholder="Nombre Completo"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            />
            
        </div></span>

        <span className="col px-5">
          <span className="col-lg-6" ><div className="my-4">
            <input
            className="form-control"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}
            />
            
        </div>
        
        </span>
        </span>

        <span className="col px-5">
          <span className="col-lg-6" ><div className="my-4">
            <input
            className="form-control"
            placeholder="Contraseña"
            value={contrasenia}
            onChange={(e)=> setContrasenia(e.target.value)}
            />
            
        </div>
        
        </span>
        </span>


      <span>
        
        <button
            className="btn btn-primary mt-2 mb-4"
            onClick={guardar}
            >
                Ingresar nuevo usuario
            </button>
      </span>

      <section className="text-dark bg-light">
                 <div className="container text-center">
                    <h1 className="display-6 fw-bold py-5">Lista de usuarios</h1>
                </div>
               
            </section>

      <span className="col px-5 mt-5">
         <div><ListaUsuario/></div>
      </span>
      </div>
    </div>
    );
}