import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/Login';
import SignUp from './Pages/SignUp/SignUp';
import OfertasLaborales from './Pages/OfertasLaborales/OfertasLaborales';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
          <Route path="/OfertasLaborales" element={<OfertasLaborales></OfertasLaborales>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
