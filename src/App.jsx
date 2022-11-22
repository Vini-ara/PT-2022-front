import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { AuthProvider } from "./context/authContext";



export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          index
          path="/"
          element={<Home/>} 
        }
        />
      </Routes>
    </AuthProvider>
  )
}
