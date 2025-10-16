
import './App.css';
//importando bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//react-router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Importar los componentes
import Navbar from './components/Navbar';
//Importar las páginas
import Home from './pages/Inicio';

function App() {
  return (
    //se va avisualizar en todas las páginas

    <Router> {/**Habilitar la navegación */}

      <Navbar />{/**Agregamos la barra nav menú*/}
        <Routes>
          <Route path='/' element={<Home />} /> {/**Ruta de Inicio*/}
        </Routes>
    </Router>
  );
}

//COMENTARIO DE PRUEBA

export default App;