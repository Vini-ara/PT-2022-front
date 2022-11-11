import { Route, Routes } from "react-router-dom";
import Button from "./components/button";


export function App() {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
        <Button
          text="Entrar"
          bgColor="bg-transparent"
          textColor="text-dark-blue"
          borderColor="border-dark-blue"
        >
          Hello
        </Button>
      }
      />
    </Routes>
  )
}
