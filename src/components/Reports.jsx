import { useState, useEffect } from "react";
import { AnimatedPage } from "../components/AnimatedPage";
import "../styles/Usage.css";
import { EnergyBarChart1 } from "./EnergyBarChart1";
import { EnergyBarChart2 } from "./EnergyBarChart2";
import img1 from "../assets/savings.png";
import img2 from "../assets/billEnergy.png";
import img3 from "../assets/unitEnergy.png";
import img4 from "../assets/usage.png";
import tipLogo from "../assets/tipLogo.png";
import { motion } from "framer-motion";


export const Reports = () => {
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

      <div className="reports-container">
        <h1>Power Up Your Savings: ENERGY USAGE</h1>
        <div className="top">
          <div className="bar-1">
            <h2>Weekly Power Bill Report</h2>
            <EnergyBarChart1 />
          </div>
          <div className="bar-2">
            <h2>Weekly Power Usage Report</h2>
            <EnergyBarChart2 />
          </div>
        </div>
        <div className="mid">
          <div className="advice-bar-1">
            <div>
              <img src={img4} />
              <h1>Current Usage</h1>
              <h2>
                <span>Kwh </span>120.23
              </h2>
            </div>
            <div>
              <img src={img3} />
              <h1>Proposed Usage</h1>
              <h2>
                <span>Kwh </span>109.23
              </h2>
            </div>
          </div>
          <div className="advice-bar-2">
            <div>
              <img src={img2} />
              <h1>Current Bill</h1>
              <h2>
                <span>KSHs. </span>1260.23
              </h2>
            </div>
            <div>
              <img src={img1} />
              <h1>Proposed Bill</h1>
              <h2>
                <span>KSHs. </span>1100.18
              </h2>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="adjustments-container">
            <div className="tips-container">
              <div className="tips-title-container">
                <img style={{width:'20px'}}src={tipLogo} />
                <h1>HOW TO ACHIEVE THESE TARGETS</h1>
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
      </div>
    </AnimatedPage>
  );
};
