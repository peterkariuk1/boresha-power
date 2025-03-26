import React, {useState, useEffect} from "react";
import "../styles/App.css";
import "../styles/GetStarted.css";
import { Link} from "react-router-dom"
import appliances from "../assets/appliances.jpeg";
import homes from "../assets/homes.jpeg";
import saving from "../assets/saving.jpeg";

const images =[saving, homes, appliances];

const GetStarted = () => {
const [currentIndex, setCurrentIndex] = useState(0);

const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) %images.length);
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length -1 : prevIndex -1);
};

useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 5000); 

  return () => clearInterval(interval);

}, []);


  return (

    <div className="getting-started">
      <div className="caroussel">
      <img src={images[currentIndex]} alt="Slide" className="slide-image" />

   
      <button className="prev-button" onClick={prevSlide}>❮</button>
      <button className="next-button" onClick={nextSlide}>❯</button>
    </div>
      
      <h1>Welcome to Boresha Power!</h1>
     
      <h1 className="header">Welcome to Boresha Power!Our mission is help you track, understand , and optimize your energy consumption with ease.</h1>
      <Link to="/Login">
<button>Get started</button>
</Link>
    </div>
  );
};

export default GetStarted;
