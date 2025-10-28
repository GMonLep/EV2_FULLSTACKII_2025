import { useState, useEffect } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Cargar usuarios guardados en localStorage
  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(datosGuardados);
  }, []);

  // Guardar usuarios en localStorage
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  // Limpiar formulario
  const limpiarFormulario = () => {
    setNombre("");
    setCorreo("");
    setRol("");
    setEditIndex(null);
  };

  // Guardar o editar usuario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !rol) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const correoExiste = usuarios.some(
      (u, i) => u.correo === correo && i !== editIndex
    );
    if (correoExiste) {
      alert("Ya existe un usuario con este correo.");
      return;
    }

    const nuevoUsuario = { nombre, correo, rol };

    if (editIndex === null) {
      setUsuarios([...usuarios, nuevoUsuario]);
      alert("Usuario agregado correctamente ✅");
    } else {
      const actualizados = [...usuarios];
      actualizados[editIndex] = nuevoUsuario;
      setUsuarios(actualizados);
      alert("Usuario actualizado ✏️");
    }

    limpiarFormulario();
  };

  // Editar usuario
  const handleEdit = (index) => {
    const user = usuarios[index];
    setNombre(user.nombre);
    setCorreo(user.correo);
    setRol(user.rol);
    setEditIndex(index);
  };

  // Eliminar usuario
  const handleDelete = (index) => {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
      const filtrados = usuarios.filter((_, i) => i !== index);
      setUsuarios(filtrados);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold mb-4">
        👥 Gestión de Usuarios
      </h1>

      {/* Formulario */}
      <div className="card shadow border-0 mb-4">
        <div className="card-header bg-success text-white text-center fs-5 fw-bold">
          {editIndex !== null ? "Editar Usuario" : "Añadir Usuario"}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                placeholder="ejemplo@gmail.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Rol</label>
              <select
                className="form-select"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                required
              >
                <option value="">Seleccione un rol...</option>
                <option value="Administrador">Administrador</option>
                <option value="Vendedor">Vendedor</option>
                <option value="Cliente">Cliente</option>
              </select>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success w-50">
                {editIndex !== null ? "Actualizar" : "Guardar"}
              </button>
              {editIndex !== null && (
                <button
                  type="button"
                  className="btn btn-secondary ms-3"
                  onClick={limpiarFormulario}
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Tabla de usuarios */}
      <div className="card shadow border-0">
        <div className="card-header bg-primary text-white text-center fs-5 fw-bold">
          Lista de Usuarios
        </div>
        <div className="card-body table-responsive">
          <table className="table table-hover align-middle text-center">
            <thead className="table-secondary">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-muted">
                    No hay usuarios registrados.
                  </td>
                </tr>
              ) : (
                usuarios.map((u, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{u.nombre}</td>
                    <td>{u.correo}</td>
                    <td>{u.rol}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleEdit(i)}
                      >
                        ✏️
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(i)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
