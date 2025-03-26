import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/GetStarted.css";

const slides = [
  {
    image: "src/assets/homes.jpeg",
    text: "Welcome to Boresha Power! Our mission is to help you track, understand, and optimize your energy consumption with ease.",
  },
  {
    image: "src/assets/saving.jpeg",
    text: "Discover energy-saving tips and reduce your electricity costs effortlessly.",
  },
  {
    image: "src/assets/save.jpeg",
    text: "Integrate sustainable energy solutions and go green with Boresha Power!",
  },
];

const GetStarted = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="getting-started">  


        <div className="slide-content">

      <img src="src/assets/banner.jpeg" alt="Boresha Power" />
      

                  <p>{slides[currentSlide].text}</p></div>


      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      > 
         
          <div className="nav-buttons">
            <button className="prev-button" onClick={prevSlide}>❮</button>
            <button className="next-button" onClick={nextSlide}>❯</button>
          </div>
         
          {currentSlide === slides.length - 1 && (
            <Link to="/Login">
              <button className="getstarted-btn">Get Started</button>
            </Link>
          )}
      
      </div>
    </div>
  );
};

export default GetStarted;
