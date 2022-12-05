import Home from './pages/Home';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { AuthGuard } from './components/AuthGuard';
import { AuthProvider } from './contexts/authContext';
import Usuarios from './pages/Usuarios';
import Questionario from './pages/Questionario';

export function App() {
  return (
    <AuthProvider>
      {/* <AuthGuard> */}
      <Routes>
      <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="questionario" element={<Questionario />} />
        </Route>
      </Routes>
      {/* </AuthGuard> */}
    </AuthProvider>
  );
}
