import ModuleList from "./ModuleList";
import "./index.css"

import {FaBars, FaEllipsisVertical} from "react-icons/fa6";
import {FaPlus} from "react-icons/fa6";
import {FaRegCircleCheck} from "react-icons/fa6";
import {Link, useParams} from "react-router-dom";
import {FaChevronRight} from "react-icons/fa";
import CourseNavigation from "../CourseNavigation";
import db from "../../Database";

function Modules() {
  const {courseId} = useParams();
  const course = db.courses.find((course) => course._id === courseId);

  return (
      <div className="main-content-wrapper">
        <div className="d-none d-md-flex header-bar">
          <FaBars/>
          <nav id="breadcrumbs">
            <ul className="breadcrumbs list-group">
              <li className="list-group-item">
                <Link to={`/Kanbas/Courses/${courseId}`}>
                  {`${course._id} ${course.name}`}
                </Link>
              </li>
              <li className="list-group-item">
                <FaChevronRight/>
                Modules
              </li>
            </ul>
          </nav>
        </div>
        <div className="below-header-content">
          {<CourseNavigation/>}
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
        </div>
      </div>
  );
}

export default Modules;