import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { Home } from "./pages/home";



export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          index
          path="/"
          element={<Home/>}
        />
      </Routes>
    </AuthProvider>
  );
}
