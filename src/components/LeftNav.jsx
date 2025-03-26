import { Link } from "react-router-dom";
import boreshaLogo from "../assets/boresha-logo.png";
import analyticsIcon from "../assets/analytics.png";
import newsIcon from "../assets/news.png";
import recommendIcon from "../assets/recommend.png";
import settingsIcon from "../assets/settings.png";

export const LeftNav = () => {
  return (
    <div className="left-section">
      <div>
        <img src={boreshaLogo} />
        <p>
          Boresha<span>Power</span>
        </p>
      </div>
      <nav>
        <div className="nav-top">
          <Link
            to="/usage/"
            style={{ color: "#163466", textDecoration: "none" }}
          >
            <div>
              <img src={analyticsIcon} />
              Analytics
            </div>
          </Link>
          <Link
            to="/usage/news"
            style={{ color: "#163466", textDecoration: "none" }}
          >
          <div>
            <img src={newsIcon} />
            News
          </div>
       </Link>
       <Link
            to="/usage/reports"
            style={{ color: "#163466", textDecoration: "none" }}
          >
          <div>
            <img src={recommendIcon} />
            Reports
          </div>
        </Link>
        </div>
        <div className="nav-bottom">
        <Link
            to="/usage/settings"
            style={{ color: "#163466", textDecoration: "none" }}
          >
          <div>
            <img src={settingsIcon} />
            Settings
          </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};
