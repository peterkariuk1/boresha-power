import React, { useState } from 'react';
import '../styles/Appliances.css';
import { appliances as applianceData,  } from '../assets/assets';  // Ensure correct path for the data

const Appliances = () => {
  const [selectedAppliances, setSelectedAppliances] = useState([]); 
  const [numRooms, setNumRooms] = useState(1);
  

  // Handle appliance selection or deselection
  const handleSelect = (applianceName) => {
    setSelectedAppliances((prevSelected) => {
      const updatedSelection = prevSelected.includes(applianceName)
        ? prevSelected.filter((item) => item !== applianceName)  // Deselect
        : [...prevSelected, applianceName]; 
        const selectedItem=applianceData.find((item)=> item.name===applianceName);
        if(selectedItem){
          console.log(`Selected appliance: ${selectedItem.name}, Kilowatts: ${selectedItem.kilowatts}`);
        }

      return updatedSelection;
    });
  };

  // Handle number of rooms change
  const handleRoomChanges = (event) => {
    setNumRooms(event.target.value);
  }
  //handles the submision
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Appliances:', selectedAppliances);
    console.log('Number of Rooms:', numRooms);
    window.alert('Selected Appliances: ' + selectedAppliances + '\nNumber of Rooms: ' + numRooms);
  }

  return (
    <div>
      <div className="slider-container">
        <p>Choose the number of rooms in your house</p>
        <input 
          type="range"
          id="rooms-slider"
          min="1"
          max="20"
          value={numRooms}
          onChange={handleRoomChanges}
          className="room-slider"
          step={1}
          
        />
        <div className="slider-value">
          <span>{numRooms} {numRooms === 1 ? 'room' : 'rooms'}</span>
        </div>
      </div>

      <div className="container">
        <h2>Choose the Common Appliances You Use to Begin Optimizing Your Energy Usage and Reduce Costs</h2>

        <div className="appliances-wrapper">
          {applianceData.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item.name)} 
              className={`appliance-item ${selectedAppliances.includes(item.name) ? 'selected' : ''}`} 
            >
              <img src={item.image} alt={item.name} className="appliance-image" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="submit-container">
          <button  onClick={handleSubmit} className='submit-btn'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Appliances;
