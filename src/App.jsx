import { Route, Routes } from "react-router-dom";
import Button from "./components/button";
import { AuthProvider } from "./context/authContext";


export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          index
          path="/"
          element={
          <Button
            styles="bg-primary text-white border-primary"
          >
            Hello
          </Button>
        }
        />
      </Routes>
    </AuthProvider>
  )
}
