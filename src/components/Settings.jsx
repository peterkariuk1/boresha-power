import React, { useState } from "react";
import { AnimatedPage } from "../components/AnimatedPage";
import { appliances as applianceData } from "../assets/assets"; // Ensure this path is correct
import "../styles/Usage.css"; // Ensure necessary styling is applied

export const Settings = ({ onLogout }) => {
  const [selectedAppliances, setSelectedAppliances] = useState([]);

  // Handle appliance selection/deselection
  const handleSelectAppliance = (applianceName) => {
    setSelectedAppliances((prev) =>
      prev.includes(applianceName)
        ? prev.filter((item) => item !== applianceName) // Remove appliance if already selected
        : [...prev, applianceName] // Add appliance if not selected
    );
  };

  // Handle Add Appliances functionality
  const handleAdd = () => {
    if (selectedAppliances.length > 0) {
      // Show success message with selected appliances
      alert(`Appliance(s) added: ${selectedAppliances.join(", ")}`);
    } else {
      // Show message if no appliances are selected
      alert("No appliances selected. Please select appliances to add.");
    }
  };
  const handleLogout = () => {
    return (
      alert("You have successfully logged out!")
    )
  }

  return (
    <AnimatedPage>
      <div className="settings-container">
      <div className="header">
        <h1 className="heading">BoreshaPower</h1>
        
           {/* Logout Button */}
        <button className="btn-logout" onClick={handleLogout}>
          Log Out
        </button>
        </div>

        {/* Appliance Management */}
        <div className="settings-item">
          <h3>Manage Appliances</h3>
          <div className="appliance-list">
            {applianceData.map((item) => (
              <div
                key={item.name}
                className={`appliance ${selectedAppliances.includes(item.name) ? "selected" : ""}`}
                onClick={() => handleSelectAppliance(item.name)}
              >
                <img src={item.image} alt={item.name} className="appliance-img" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div> 

        {/* Add Appliances Button */}
        <button onClick={handleAdd}className="btn-add">Add Appliances </button>

       
      </div>
    </AnimatedPage>
  );
};

export default Settings;
