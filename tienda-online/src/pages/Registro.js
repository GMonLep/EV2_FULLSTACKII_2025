// src/pages/Registro.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistro = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!nombre || !email || !password || !confirmPassword) {
      toast.error("Por favor completa todos los campos", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    // Validación de contraseñas
    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    // Aquí iría la lógica real de registro (API, localStorage, etc.)
    toast.success("¡Registro exitoso!", {
      position: "top-right",
      autoClose: 2000,
    });

    // Limpiar formulario
    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{  paddingTop: 20, minHeight: "80vh" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "450px", width: "100%" }}>
        <h2 className="text-center mb-4">Registrarse</h2>
        <form onSubmit={handleRegistro}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre completo"
            />
          </div>

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

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
            />
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold">Registrarse</button>
        </form>
        <p className="text-center mt-3">
          ¿Ya tienes cuenta? <a href="/inicio-sesion">Inicia sesión</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Registro;
