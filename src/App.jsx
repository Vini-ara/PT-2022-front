import Home from './pages/Home';
import Tabela from "./components/table"
import Formulario from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { AuthGuard } from './components/AuthGuard';
import { AuthProvider } from './contexts/authContext';

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
