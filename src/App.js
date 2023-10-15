import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/Login';
import SignUp from './Pages/SignUp/SignUp';
import OfertasLaborales from './Pages/OfertasLaborales/OfertasLaborales';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/OfertasLaborales" element={<OfertasLaborales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
