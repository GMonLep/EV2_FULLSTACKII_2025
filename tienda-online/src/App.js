
import './App.css';
//importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';




//Importar las páginas
import Inicio from "./pages/Inicio";
import InicioSesion from "./pages/InicioSesion";
import Registro from "./pages/Registro";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import Productos from './pages/Productos';
import Blog from './pages/Blog';
import Checkout from './pages/Checkout';
import InicioAdmin from './pages/admin/InicioAdmin';
import Reportes from './pages/Reportes';
import Usuario from './pages/admin/Usuario'
import ListaUsuario from './pages/admin/ListaUsuario';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
     {/* Routes */}
      <Routes>
          <Route path="/" element={<Inicio />} />
          
          <Route path="/inicio-sesion" element={<InicioSesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/nosotros" element={<Nosotros />}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/productos" element={<Productos />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/reportes" element={<Reportes />}/>
          

          <Route>
            <Route path="/inicioAdmin" element={<InicioAdmin />}/>
            <Route path="/usuarios" element={<Usuario />}/>
            <Route path="/ListaUsuario" element={<Usuario />}/>
        <Route path="/carrito" element={<Carrito />} />
        </Route>

      </Routes>
      <Footer/>ss
    </BrowserRouter>
  );
}

//COMENTARIO DE PRUEBA

export default App;