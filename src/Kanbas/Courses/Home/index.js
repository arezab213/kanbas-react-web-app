import ModuleList from "../Modules/ModuleList";
import "./index.css"

import {
  FaBan, FaBullhorn, FaChartColumn,
  FaEllipsisVertical, FaLocationCrosshairs,
  FaPlus, FaRegBell, FaFileImport,
  FaRegCircleCheck, FaRightFromBracket
} from "react-icons/fa6";

function Home() {
  return (
      <>
        <div className="home-main-content">
          <div className="secondary-header-bar">
            <button className="btn btn-primary ellipsis">
              <FaEllipsisVertical/>
            </button>
            <button className="btn btn-secondary add-module">
              <FaPlus/>
              Module
            </button>
            <button className="btn btn-primary dropdown-toggle publish-all">
              <FaRegCircleCheck/>
              Publish All
            </button>
            <button className="btn btn-primary">View Progress</button>
            <button className="btn btn-primary">Collapse All</button>
          </div>
          <div className="home-module-content">
            <ModuleList/>
          </div>
        </div>
        <div className="d-none d-xl-flex home-side-content">
          <div id="course-status-btns">
            <h5 id="home-side-panel-header">Course Status</h5>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary"
                      id="unpublish-btn">
                <FaBan/>
                Unpublish
              </button>
              <button type="button" className="btn btn-primary"
                      id="publish-btn">
                <FaRegCircleCheck/>
                Published
              </button>
            </div>
            <button type="button" className="btn btn-primary">
              <FaFileImport/>
              Import Existing Content
            </button>
            <button type="button" className="btn btn-primary">
              <FaRightFromBracket/>
              Import from Commons
            </button>
            <button type="button" className="btn btn-primary">
              <FaLocationCrosshairs/>
              Choose Home Page
            </button>
            <button type="button" className="btn btn-primary">
              <FaChartColumn/>
              View Course Stream
            </button>
            <button type="button" className="btn btn-primary">
              <FaBullhorn/>
              New Announcement
            </button>
            <button type="button" className="btn btn-primary">
              <FaChartColumn/>
              New Analytics
            </button>
            <button type="button" className="btn btn-primary">
              <FaRegBell/>
              View Course Notifications
            </button>
          </div>
          <div className="btn-subsections" id="to-do-section">
            <h6 id="home-side-panel-subheader">To Do</h6>
          </div>
          <div className="btn-subsections" id="coming-up-section">
            <h6 id="home-side-panel-subheader">Coming Up</h6>
          </div>
        </div>
      </>
  );
}

export default Home;