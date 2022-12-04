import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { Home } from './pages/Home';
import Formulario from './components/Form';
import Button from './components/Buttons/Button';
import Tabela from "./components/table"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import TabelaDois from './components/table2';

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="form" element={<Formulario />} />
        <Route index path="table" element={<Tabela />} />
        <Route index path="header" element={<Header />} />
        <Route index path="table2" element={<TabelaDois />} />  
      </Routes>
    </AuthProvider>
  );
}
