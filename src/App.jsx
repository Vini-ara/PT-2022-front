import Home from './pages/Home';
import Formulario from './components/Form';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import Button from './components/Buttons/Button';
import Tabela from "./components/table"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import TabelaDois from './components/table2';
import { AuthGuard } from './components/AuthGuard';

export function App() {
  return (
    <AuthProvider>
      <AuthGuard>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="form" element={<Formulario />} />
          <Route index path="table" element={<Tabela />} />
        </Routes>
      </AuthGuard>
    </AuthProvider>
  );
}
