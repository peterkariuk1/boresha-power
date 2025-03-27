import { useState, useEffect } from "react";
import { AnimatedPage } from "../components/AnimatedPage";
import image1 from "../assets/appliances.jpeg";
import image2 from "../assets/saving.jpeg";
import image3 from "../assets/appliances.jpeg";
import image4 from "../assets/electricitybill.jpeg";
import image5 from "../assets/smsalert.jpeg";

const tipsData = [
  {
    id: 1,
    img: image4,
    title: "Lack of Energy Usage Awareness",
    before: "Users had no clear way to track their energy consumption.",
    after: "The app provides real-time energy monitoring with easy-to-understand visual reports.",
  },
  {
    id: 2,
    img: image3,
    title: "Difficulty in Identifying High Energy Usage Appliances",
    before: "Users didn’t know which appliances consumed the most power.",
    after: "The app tracks individual appliance consumption and alerts users when an appliance exceeds its normal usage.",
  },
  {
    id: 3,
    img: image2,
    title: "No Personalized Recommendations for Energy Savings",
    before: "Users had to rely on generic energy-saving tips.",
    after: "The app provides personalized energy-saving recommendations based on actual usage patterns.",
  },
  {
    id: 4,
    img: image5,
    title: "No Alerts for Abnormal Energy Consumption",
    before: "Users had no way to know when an appliance was consuming too much energy.",
    after: "The app sends SMS alerts when an appliance exceeds its expected energy usage.",
  },
  {
    id: 5,
    img: image1,
    title: "No Historical Energy Usage Data",
    before: "Users couldn’t track their energy consumption trends over time.",
    after: "The app stores energy data and generates weekly/monthly usage reports.",
  },
];

export const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tipsData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Show only 3 tips at a time
  const visibleTips = [
    tipsData[currentIndex],
    tipsData[(currentIndex + 1) % tipsData.length],
    tipsData[(currentIndex + 2) % tipsData.length],
  ];

  return (
    <AnimatedPage>
      <h1 className="heading">BoreshaPower</h1>
<h2 className="heading2">Track you Power Track your Future</h2>
      <div className="newspage">
      <div className="buttons">
      <button onClick={() => setCurrentIndex((currentIndex - 1 + tipsData.length) % tipsData.length)}>⬅ </button>
        
        </div>
        
        {visibleTips.map((tip) => (
          <div key={tip.id} className="tips">
            <img className="tip-img" src={tip.img} alt={tip.title} />

            <div className="tip-text">
            <h4>{tip.title}</h4>
            <p><strong>Before:</strong> {tip.before}</p>
            <p><strong>After:</strong> {tip.after}</p>
          </div>
          </div>
        ))}
          <div className="buttons"><button onClick={() => setCurrentIndex((currentIndex + 1) % tipsData.length)}>➡</button>
         </div>
      </div>

     
    </AnimatedPage>
  );
};
