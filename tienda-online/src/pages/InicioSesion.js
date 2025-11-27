import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const API_URL = "https://usuarioservice-p81j.onrender.com/api/usuarios";

function InicioSesion() {
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!correo || !contrasenia) {
      toast.error("Por favor completa todos los campos", { autoClose: 2000 });
      return;
    }

    try {
      const res = await axios.get(API_URL);
      const usuarios = res.data;

      const usuario = usuarios.find(
        (u) => u.correo === correo && u.contrasenia === contrasenia
      );

      if (!usuario) {
        toast.error("Correo o contraseña incorrectos", { autoClose: 2000 });
        return;
      }

      toast.success("¡Inicio de sesión exitoso!", { autoClose: 2000 });

      localStorage.setItem("usuario", JSON.stringify(usuario));

      setCorreo("");
      setContrasenia("");

      if (usuario.rol === "admin") {
        setTimeout(() => {
          window.location.href = "/inicioAdmin";
        }, 1200);
      } else {
        setTimeout(() => {
          window.location.href = "/productos";
        }, 1200);
      }
    } catch (error) {
      toast.error("Error al iniciar sesión", { autoClose: 2000 });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contrasenia" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contrasenia"
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)}
              placeholder="********"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
        </form>
        <p className="text-center mt-3">
          ¿No tienes cuenta? <a href="/registro">Registrarse</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default InicioSesion;
