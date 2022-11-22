import { Link, Route, Routes } from 'react-router-dom';
import { LoginButton } from './components/LoginButton';
import { AuthProvider } from './contexts/authContext';

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Link to="home">
              <LoginButton />
            </Link>
          }
        />
        <Route path="home" element={<h1>LAR DOCE LAR!</h1>} />
      </Routes>
    </AuthProvider>
  );
}
