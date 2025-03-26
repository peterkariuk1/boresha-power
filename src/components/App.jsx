
import { Routes, Route } from "react-router-dom";
import GetStarted from "../pages/GetStarted";
import {Usage} from "../pages/Usage.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Appliances from '../pages/Appliances'
import "../styles/App.css";

function App() {
  return (
    <Routes>
    
      <Route path="/" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/usage/*" element={<Usage />} />
      <Route path="/appliances" element={<Appliances />} />
    </Routes>
  );
<<<<<<< HEAD



=======
>>>>>>> 17fa87bdbca07c5f070effd79cb7f7a91bf04ce3
}

export default App;

