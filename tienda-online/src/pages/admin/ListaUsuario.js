import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://usuarioservice-p81j.onrender.com/api/usuarios";

export default function ListaUsuario() {
    const [usuarios, setUsuarios] = useState([]);
    const [editId, setEditId] = useState(null);
    const [nombre, setNombre] = useState("");
    const [rol, setRol] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const cargar = async () => {
        const res = await axios.get(API_URL);
        setUsuarios(res.data);
    };

    const eliminar = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        cargar();
    };

    const actualizar = async () => {
        await axios.patch(`${API_URL}/${editId}`, {
            nombre,
            rol,
            correo,
            contrasenia
        });
        setEditId(null);
        setNombre("");
        setRol("");
        setCorreo("");
        setContrasenia("");
        cargar();
    };

    const iniciarEdicion = (user) => {
        setEditId(user.id);
        setNombre(user.nombre);
        setRol(user.rol);
        setCorreo(user.correo);
        setContrasenia(user.contrasenia || "");
    };

    useEffect(() => {
        cargar();
    }, []);

    return (
        <>
            {editId && (
                <div className="card p-3 my-3">
                    <h5>Editando usuario...</h5>
                    <input 
                        className="form-control my-2" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder="Nombre"
                    />
                    <input 
                        className="form-control my-2" 
                        value={rol} 
                        onChange={(e) => setRol(e.target.value)} 
                        placeholder="Rol"
                    />
                    <input 
                        className="form-control my-2" 
                        value={correo} 
                        onChange={(e) => setCorreo(e.target.value)} 
                        placeholder="Correo"
                    />
                    <input 
                        className="form-control my-2" 
                        value={contrasenia} 
                        onChange={(e) => setContrasenia(e.target.value)} 
                        placeholder="Contraseña"
                    />

                    <span className="row mx-5">
                        <button className="btn btn-dark me-2 mb-3" onClick={actualizar}>Guardar cambios</button>
                        <button className="btn btn-secondary" onClick={() => setEditId(null)}>Cancelar</button>
                    </span>
                </div>
            )}

            <ul className="list-group">
                {usuarios
                .filter(user => (user.rol?.toLowerCase() || "") !== "admin")
                .map(p => (
                    <li key={p.id}
                        className="list-group-item 
                             d-flex flex-column flex-md-row 
                             justify-content-between align-items-md-center 
                             gap-2"
                    >
                        <div className="d-flex flex-column flex-md-row w-100 justify-content-md-start gap-2 text-start">
                            <span className="fw-bold mx-3 text-center w-25">{p.nombre}</span>
                            <span className="mx-3 text-center w-25">Rol: {p.rol}</span>
                            <span className="text-break mx-3 text-center w-25">Correo: {p.correo}</span>
                            <span className="text-break mx-3 text-center w-25">Contraseña: {p.contrasenia}</span>
                        </div>


                        <div className="d-flex flex-row gap-2">
                            <button 
                                className="btn btn-warning btn-sm"
                                onClick={() => iniciarEdicion(p)}
                            >
                                Actualizar
                            </button>

                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={() => eliminar(p.id)}
                            >
                                Eliminar
                            </button>
                        </div>

                    </li>
                ))}
            </ul>
        </>
    );
}
