import {Link} from "react-router-dom";
import db from "../Database";
import "./index.css"

import {FaEllipsisVertical} from "react-icons/fa6";
import {FaRegPenToSquare} from "react-icons/fa6";
import {FaBullhorn} from "react-icons/fa6";
import {FaRegComments} from "react-icons/fa6";

function Dashboard() {
  const courses = db.courses;
  return (
      <div>
        <div className="d-none d-md-flex header-bar">
          <div className="breadcrumb-wrapper">
            <nav id="breadcrumbs">
              <ul className="breadcrumbs list-group">
                <li className="list-group-item" id="dashboard-header">
                  Dashboard
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="dashboard-main-content-wrapper">
          <div className="header-bar">
            Published Courses ({courses.length})
          </div>
          <div className="course-cards-container">
            <div className="d-flex flex-row flex-wrap card-row">
              {courses.map((course) => (
                  <div className="card dashboard-course-card">
                    <div className="dashboard-card-header">
                      <div className="card-header-button">
                        <FaEllipsisVertical/>
                      </div>
                    </div>
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                      <div className="card-body dashboard-card">
                        <h6 className="dashboard-card-title">
                          {`${course._id} ${course.name}`}
                        </h6>
                        <div className="dashboard-card-subtitle">
                          {`${course._id}.${course.number}`}
                        </div>
                        <div className="dashboard-card-course-term">
                          {`${course.startDate} to ${course.endDate}`}
                        </div>
                      </div>
                    </Link>
                    <div className="dashboard-card-base">
                      <Link to={`/Kanbas/Courses/${course._id}`}>
                        <FaRegPenToSquare/>
                      </Link>
                      <Link to={`/Kanbas/Courses/${course._id}`}>
                        <FaBullhorn/>
                      </Link>
                      <Link to={`/Kanbas/Courses/${course._id}`}>
                        <FaRegComments/>
                      </Link>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;