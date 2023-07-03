import wave from "../assets/wave.svg";
import menuIcon from "../assets/menuIcon.png";
import gridIcon from "../assets/gridIcon.png";
import "../css/dash.css";
import { useState, useCallback } from "react";
import JobsGrid from "./jobsGrid";
import JobModal from "./jobModal";
function Dashboard() {
  const [displayState, setDisplayState] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  function displayChange() {
    setDisplayState(!displayState);
  }
  const handleAddJob = useCallback((e: any) => {
    e.preventDefault();
    const modal: HTMLElement | any = document.getElementById("addJobModal");
    modal.showModal();
  }, []);

  const handleJobSubmit = useCallback(() => {
    setRefreshTrigger((prevTrigger) => !prevTrigger);
  }, []);

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
            <span className="dashNewJob" onClick={handleAddJob}>
              + New job
            </span>
            <dialog id="addJobModal">
              <JobModal></JobModal>
            </dialog>
          </div>
          <div className="dashJobWrapper">
            <JobsGrid></JobsGrid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
