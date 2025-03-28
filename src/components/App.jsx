import {useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom";
import GetStarted from "../pages/GetStarted";
import {Usage} from "../pages/Usage.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Appliances from '../pages/Appliances'
import "../styles/App.css";
import axios from 'axios';

function App() {
  const [energyData, setEnergyData] = useState([]);
  const getEnergyData = async () => {
    try {
      const response = await axios.get("/api/data");
      setEnergyData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEnergyData();
  }, []);
  return (
    <Routes>
    
      <Route path="/" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/usage/*" element={<Usage  data = {energyData}/>} />
      <Route path="/appliances" element={<Appliances />} />
    </Routes>
  );

}

export default App;

