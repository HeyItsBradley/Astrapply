import wave from "../assets/wave.svg";
import menuIcon from "../assets/menuIcon.png";
import gridIcon from "../assets/gridIcon.png";
import "../css/dash.css";
import { useState } from "react";

function Dashboard() {
  const [displayState, setDisplayState] = useState(true);

  function displayChange() {
    setDisplayState(!displayState);
  }

  return (
    <div className="dashWrapper">
      <div
        className="dashContainer"
        style={{ backgroundImage: `url(${wave})` }}
      >
        <div className="dashLeft">
          <aside className="dashAside">
            <p>Filter:</p>
          </aside>
        </div>
        <div className="dashRight">
          <div className="dashBar">
            <div className="dashBarDisplayWrapper">
              <p>Display:</p>
              <div className="dashBarDisplayIcons">
                <img
                  className={`displayIcon ${displayState ? "displayFlat" : ""}`}
                  src={menuIcon}
                  onClick={displayChange}
                />
                <img
                  className={`displayIcon ${
                    !displayState ? "displayGrid" : ""
                  }`}
                  src={gridIcon}
                  onClick={displayChange}
                />
              </div>
            </div>
            <span className="dashNewJob">+ New job</span>
          </div>
        </div>
        <div className="dashJobWrapper"></div>
      </div>
    </div>
  );
}

export default Dashboard;
