import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EnergyBarChart } from "../components/EnergyBarChart.jsx";
import { EnergyPieChart } from "../components/EnergyPieChart.jsx";
import { AnimatedPage } from "../components/AnimatedPage.jsx";
import cashLogo from "../assets/cashLogo.png";
import energyLogo from "../assets/energyLogo.png";
import tipLogo from "../assets/tipLogo.png";
import "../styles/Usage.css";
import axios from "axios";


export const Analytics = () => {
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

  const energyTips = [
    "Did you know? Turning off lights when you leave a room can cut your electricity bill by up to 10% annually!",
    "Did you know? Unplugging chargers when not in use prevents ‘phantom’ energy loss, saving you money over time.",
    "Did you know? LED bulbs use 75% less energy and last 25 times longer than traditional bulbs!",
    "Did you know? Keeping your fridge at 3-5°C and your freezer at -18°C keeps food fresh while reducing energy use.",
    "Did you know? Washing clothes in cold water can save up to 90% of the energy used by a washing machine!",
    "Did you know? Using high-energy appliances during off-peak hours reduces strain on the grid and can lower electricity costs.",
    "Did you know? Closing curtains during hot days keeps rooms cooler naturally, reducing the need for air conditioning.",
    "Did you know? Smart power strips can automatically cut power to devices on standby, saving up to 10% on energy bills!",
    "Did you know? Air-drying clothes instead of using a dryer can reduce your household’s energy use significantly.",
    "Did you know? Electronics on standby mode can account for 5-10% of your home's energy use—turn them off completely!",
    "Did you know? Setting your thermostat 1°C lower during cold and 1°C higher in warm seasons can save up to 10% on heating and cooling costs.",
    "Did you know? Cooking with lids on pots and using the right burner size helps food cook faster and saves energy.",
    "Did you know? Cooking with a microwave instead of an oven can reduce energy use by up to 80% for small meals!",
    "Did you know? Lowering your water heater temperature to 50°C (120°F) can prevent overheating and reduce electricity costs.",
    "Did you know? Sealing gaps around windows and doors can reduce heat loss by up to 25%, making your home more energy-efficient.",
    "Did you know? Using a ceiling fan instead of an air conditioner can save up to 40% on cooling costs.",
    "Did you know? Laptops use 80% less electricity than desktop computers—switching can save energy and money!",
    "Did you know? Defrosting your freezer regularly improves efficiency, reducing power consumption by up to 30%.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % energyTips.length);
    }, 8000); // Change tip every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatedPage>
      <h2 style={{ marginLeft: "40px", color: "#163466" }}>
        Hello, {energyData[0]?.username}
      </h2>

      <div className="analytics-page">
        <div className="analytics-top">
          <div className="top-appliance-rating">
            <div>
              <img src={cashLogo} />
            </div>
            <div>
              <h2>
                Total Consumption <span>KSHs</span>
              </h2>
            </div>
            <div>
              <h1>
                <span>KSHs. </span>230.02
              </h1>
            </div>
          </div>
          <div className="bill-estimate">
            <div>
              <img src={energyLogo} />
            </div>
            <div>
              <h2>
                Total Consumption <span>kWh</span>
              </h2>
            </div>
            <div>
              <h1>
                12 <span>kWh </span>
              </h1>
            </div>
          </div>
          <div className="pie-chart-container">
            <h1>
              Daily Energy Usage in Graph <span>(kWh)</span>
            </h1>
            <div className="pie-chart-data">
              <EnergyPieChart />
            </div>
          </div>
        </div>
        <div className="analytics-bottom">
          <div className="bar-graph-container">
            <h1>
              {" "}
              Daily Energy Consumption in Graph <span>(KSHs)</span>
            </h1>
            <EnergyBarChart />
          </div>
          <div className="tips-container">
            <div className="tips-title-container">
              <img src={tipLogo} />
              <h1>DID YOU KNOW?</h1>
            </div>
            <div className="tip-container">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 101 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -101 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="tip-box"
              >
                <p className="tip-text">{energyTips[index]}</p>
                <div className="tip-decoration"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};
