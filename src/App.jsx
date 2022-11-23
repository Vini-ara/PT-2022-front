import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { Home } from './pages/Home';
import Formulario from './components/Form';
import Button from './components/Buttons/Button';

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="form" element={<Formulario />} />
      </Routes>
    </AuthProvider>
  );
}
