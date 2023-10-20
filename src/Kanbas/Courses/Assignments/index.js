import React from "react";

import AssignmentList from "./AssignmentList";
import "./index.css"
import {FaBars, FaEllipsisVertical, FaPlus} from "react-icons/fa6";
import {Link, useParams} from "react-router-dom";
import {FaChevronRight} from "react-icons/fa";
import CourseNavigation from "../CourseNavigation";
import db from "../../Database";

function Assignments() {
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
                Assignments
              </li>
            </ul>
          </nav>
        </div>
        <div className="below-header-content">
          {<CourseNavigation/>}
          <div className="assignment-main-content">
            <div className="assignments-secondary-header-bar main-page">
              <input className="form-control assignment-text-input" type="text"
                     placeholder="Search for Assignment"/>
              <div className="btns-row">
                <button className="btn btn-primary ellipsis">
                  <FaEllipsisVertical/>
                </button>
                <button className="btn btn-secondary">
                  <FaPlus/>
                  Assignment
                </button>
                <button className="btn btn-primary">
                  <FaPlus/>
                  Group
                </button>
              </div>
            </div>
            <div className="assignments-module-content">
              <AssignmentList/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Assignments;
