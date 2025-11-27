import { Link } from 'react-router-dom';

function Navbar() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const logout = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/inicio-sesion";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-nav d-flex sm-flex-row gap-3 px-4">
          <Link className="nav-link text-white" to="/">Inicio</Link>
          <Link className="nav-link text-white" to="/nosotros">Nosotros</Link>
          <Link className="nav-link text-white" to="/blog">Blog</Link>
          <Link className="nav-link text-white" to="/contacto">Contacto</Link>
          <Link className="nav-link text-white" to="/productos">Productos</Link>

          {usuario && usuario.rol === "admin" && (
            <li className="nav-item">
              <a className="nav-link text-white" href="/inicioAdmin">Admin</a>
            </li>
          )}
        </div>

        <div className="navbar-nav d-flex sm-flex-row gap-4 px-5">
          <Link className="nav-link text-dark fw-bold bg-white text-center" to="/carrito">Carrito</Link>

          {usuario ? (
            <button
              className="nav-link text-dark fw-bold bg-white text-center btn btn-link"
              onClick={logout}
              style={{ textDecoration: "none" }}
            >
              Cerrar sesión
            </button>
          ) : (
            <>
              <Link className="nav-link text-dark fw-bold bg-white text-center" to="/inicio-sesion">Iniciar sesión</Link>
              <Link className="nav-link text-dark fw-bold bg-white text-center" to="/registro">Registrarse</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
