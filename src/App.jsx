import Home from './pages/Home';
import Formulario from './components/Form';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { AuthGuard } from './components/AuthGuard';

export function App() {
  return (
    <AuthProvider>
      <AuthGuard>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="form" element={<Formulario />} />
        </Routes>
      </AuthGuard>
    </AuthProvider>
  );
}
