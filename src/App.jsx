import { Route, Routes } from "react-router-dom";
import Button from "./components/button";
import { Home } from "./pages/home";


export function App() {
  return (
    <Routes>
        <Route 
        index
        path="/"
        element={
          <Home/>    
      }/>
   
    </Routes>
  );
}
