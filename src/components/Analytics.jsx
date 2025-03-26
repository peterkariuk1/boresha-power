import { EnergyBarChart} from '../components/EnergyBarChart.jsx'
import { EnergyPieChart} from '../components/EnergyPieChart.jsx'
import { AnimatedPage } from "../components/AnimatedPage.jsx";
import "../styles/Usage.css";

export const Analytics = () => {
  return (
    <AnimatedPage>
      <h2 style={{ marginLeft: "40px", color: "#163466" }}>Hello, Peter</h2>
      
        
      <div className="analytics-page">
        <div className="analytics-top">
          <div className="top-appliance-rating">
            <h1>Hello</h1>
          </div>
          <div className="bill-estimate">
            <h1>Hello</h1>
          </div>
          <div className="pie-chart-container">
          <EnergyPieChart/>
          </div>
        </div>
        <div className="analytics-bottom">
          <div className="bar-graph-container">
          <EnergyBarChart/> 
          </div>
          <div className="tips-container">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};
