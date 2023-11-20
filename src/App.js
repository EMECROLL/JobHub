import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/Login';
import SignUp from './Pages/SignUp/SignUp';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import MessagePassword from './Pages/MessagePassword/MessagePassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import OfertasLaborales from './Pages/OfertasLaborales/OfertasLaborales';
import Vcatalgo from './Pages/catalogo/Vcatalgo';
import Información from './Components/Información';
import DashboardHome from './Pages/Dashboard_Home/DashboardHome';
import DashboardUsuarios from './Pages/Dashboard_Usuarios/DashboardUsuarios';
import DashboardEmpresas from './Pages/Dashboard_Empresas/DashboardEmpresas';
import DashboardOfertasLaborales from './Pages/Dashboard_Ofertas/DashboardOfertas';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Inicio */}
          <Route path="/" element={<Home />} />

          
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="//messagePassword" element={<MessagePassword />} />
          <Route path='/reset-password/:token' element={<ResetPassword></ResetPassword>} />

          <Route path="/OfertasLaborales" element={<OfertasLaborales />} />
          <Route path="/Vcatalgo/:categoria" element={<Vcatalgo />} />
          <Route path="/informacion/:id" element={<Información />} />
          {/* <Route path="/Nosotros" element={<Nosotros />} /> */}
          {/* <Route path="/Contacto" element={<Contacto/>} /> */}

          {/* Dashboards */}
          <Route path='/dashboardHome' element={<DashboardHome></DashboardHome>}></Route>
          <Route path='/dashboardUsuarios' element={<DashboardUsuarios></DashboardUsuarios>}></Route>
          <Route path='/dashboardEmpresas' element={<DashboardEmpresas></DashboardEmpresas>}></Route>
          <Route path='/dashboardOfertas' element={<DashboardOfertasLaborales></DashboardOfertasLaborales>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
