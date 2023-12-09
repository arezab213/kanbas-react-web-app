import React from "react";

import AssignmentList from "./AssignmentList";
import "./index.css"
import {FaBars, FaEllipsisVertical, FaPlus} from "react-icons/fa6";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FaChevronRight} from "react-icons/fa";
import CourseNavigation from "../CourseNavigation";
import {selectAssignment} from "./assignmentsReducer";
import {useDispatch, useSelector} from "react-redux";

function Assignments({course}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const {courseId} = useParams();
  const handleClickAddAssignment = () => {
    const letter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const randomNumber = Math.floor(100 + Math.random() * 900);
    const result = `${letter1}${randomNumber}`;
    dispatch(selectAssignment({...assignment, _id: result, course: courseId}))
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${result}`,
        {state: {isFormForEdit: false}});
  };
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
                <button className="btn btn-secondary"
                        onClick={handleClickAddAssignment}>
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
