import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Importa el hook

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate(); // 👈 Inicializa el navegador

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar nombre
    if (nombre.trim() === '') {
      alert('El nombre es obligatorio.');
      return;
    } else if (nombre.length > 100) {
      alert('El nombre no puede superar los 100 caracteres.');
      return;
    }

    // Validar correo
    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const correoValido = dominiosPermitidos.some((dominio) => correo.endsWith(dominio));

    if (correo.trim() === '') {
      alert('El correo es obligatorio.');
      return;
    } else if (correo.length > 100) {
      alert('El correo no puede superar los 100 caracteres.');
      return;
    } else if (!correoValido) {
      alert('Solo se permiten correos con @duoc.cl, @profesor.duoc.cl o @gmail.com');
      return;
    }

    // Validar mensaje
    if (mensaje.trim() === '') {
      alert('El mensaje es obligatorio.');
      return;
    } else if (mensaje.length > 500) {
      alert('El mensaje no puede superar los 500 caracteres.');
      return;
    }

    // Si todo es válido
    alert('Mensaje enviado correctamente ✅');
    setNombre('');
    setCorreo('');
    setMensaje('');

    // Redirige al usuario al home
    navigate('/'); 
  };

  return (
    <div style={{ minHeight: '80vh' }}>
      {/* Encabezado */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Contáctanos</h1>
          <p className="lead">Envíanos tus dudas, sugerencias o comentarios. ¡Te responderemos pronto!</p>
        </div>
      </section>

      {/* Formulario */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary text-white text-center fs-4 fw-bold">
                Formulario de Contacto
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre completo</label>
                    <input
                      type="text"
                      id="nombre"
                      className="form-control"
                      placeholder="Ingrese su nombre completo"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      id="correo"
                      className="form-control"
                      placeholder="Ingrese su correo"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea
                      id="mensaje"
                      className="form-control"
                      rows="5"
                      placeholder="Escriba su mensaje aquí..."
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      maxLength={500}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 fs-5">
                    Enviar mensaje
                  </button>
                </form>
              </div>
              <div className="card-footer text-center text-muted">
                Gracias por contactarnos, te responderemos lo antes posible.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
