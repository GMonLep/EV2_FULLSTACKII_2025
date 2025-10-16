import React from "react";
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/">Logo Web</Link>
                <div className="navbar-nav d-flex flex-row gap-3">
                    <Link className="nav-link text-dark" to="/">Inicio</Link>
                    <Link className="nav-link text-dark" to="/nosotros">Nosotros</Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;