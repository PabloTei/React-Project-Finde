import './App.css';
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Monsters from "./pages/Monsters"
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Equipment from "./pages/Equipment"


const App = () => {
  

  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/monsters" element={
          <ProtectedRoute>
            <Monsters/>
          </ProtectedRoute>}/>
          <Route path="/equipment" element={
          <ProtectedRoute>
            <Equipment/>
          </ProtectedRoute>}/>
        </Routes>
    </div>
  ); 
}

export default App;
