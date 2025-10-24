
import './App.css';
//importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';




//Importar las páginas
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import Productos from './pages/Productos';
import Blog from './pages/Blog';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
     {/* Routes */}
      <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/nosotros" element={<Nosotros />}/>
          <Route path="/productos" element={<Productos />}/>
          <Route path="/blog" element={<Blog />}/>
          
          <Route>
        <Route path="/carrito" element={<Carrito />} />
        </Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

//COMENTARIO DE PRUEBA

export default App;