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
          styles="bg-primary text-white border-primary"
        >
          Hello
        </Button>
      }
      />
    </Routes>
  )
}
