import wave from "../assets/wave.svg";
import "../css/dash.css";

function Dashboard() {
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
              <div className="dashBarDisplayIcons"></div>
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
