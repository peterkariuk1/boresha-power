
import { Routes, Route } from "react-router-dom";
import GetStarted from "../pages/GetStarted";
import {Usage} from "../pages/Usage.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";
import "../styles/App.css";

function App() {
  return (
    <Routes>
    
      <Route path="/" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/usage" element={<Usage />} />
    </Routes>
  );
}

export default App;
