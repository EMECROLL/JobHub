import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/Login';
import SignUp from './Pages/SignUp/SignUp';
import OfertasLaborales from './Pages/OfertasLaborales/OfertasLaborales';
import Vcatalgo from './Pages/catalogo/Vcatalgo';
import Información from './Components/Información';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/OfertasLaborales" element={<OfertasLaborales />} />
          <Route path="/Vcatalgo/:categoria" element={<Vcatalgo />} />
          <Route path="/informacion/:id" element={<Información />} />
          {/* <Route path="/Nosotros" element={<Nosotros />} /> */}
          {/* <Route path="/Contacto" element={<Contacto/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
