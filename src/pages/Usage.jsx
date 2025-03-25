import "../styles/Usage.css";
import boreshaLogo from "../assets/boresha-logo.png";
import analyticsIcon from '../assets/analytics.png'
import newsIcon from '../assets/news.png'
import overviewIcon from '../assets/overview.png'
import recommendIcon from '../assets/recommend.png'
import settingsIcon from '../assets/settings.png'

export const Usage = () => {
  return (
    <div className="usage-page">
      <div className="left-section">
        <div>
          <img src={boreshaLogo} />
          <p>
            Boresha<span>Power</span>
          </p>
        </div>
        <nav>
          <div className="nav-top">
            <div>
              <img src={analyticsIcon} />
              Analytics
            </div>
            <div>
              <img src={newsIcon} />
              News
            </div>
            <div>
              <img src={overviewIcon} />
              Overview
            </div>
            <div>
              <img src={recommendIcon} />
              Recommendations
            </div>
          </div>
          <div className="nav-bottom">
            <div>
              <img src={settingsIcon} />
              Settings
            </div>
          </div>
        </nav>
      </div>
      <div className="right-section">
        <p>right</p>
      </div>
    </div>
  );
};
