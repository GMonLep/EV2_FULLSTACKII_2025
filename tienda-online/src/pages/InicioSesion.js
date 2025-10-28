// src/pages/InicioSesion.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function InicioSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validación simple
    if (!email || !password) {
      toast.error("Por favor completa todos los campos", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }



    

    // Aquí iría la lógica real de login (API o localStorage)
    toast.success("¡Inicio de sesión exitoso!", {
      position: "top-right",
      autoClose: 2000,
    });

    // Limpiar campos
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default InicioSesion;
