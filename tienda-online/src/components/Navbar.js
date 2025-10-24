import { Link} from 'react-router-dom';

function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-nav d-flex flex-row gap-3">
                    <Link className="nav-link text-white" to="/">Inicio</Link>
                    <Link className="nav-link text-white" to="/nosotros">Nosotros</Link>
                    <Link className="nav-link text-white" to="/blog">Blog</Link>
                    <Link className="nav-link text-white" to="/contacto">Contacto</Link>
                    <Link className="nav-link text-white" to="/productos">Productos</Link>
                </div>
                <div className="navbar-nav d-flex flex-row gap-3">
                    <Link className="nav-link text-dark fw-bold bg-white " to="/carrito">Carrito</Link>
                    <Link className="nav-link text-dark fw-bold bg-white" to="/inicioSesion">Iniciar sesión</Link>
                    <Link className="nav-link text-dark fw-bold bg-white" to="/inicioSesion">Registrarse</Link>
                </div>
            </div>
        </nav>

       
    );
}
export default Navbar;