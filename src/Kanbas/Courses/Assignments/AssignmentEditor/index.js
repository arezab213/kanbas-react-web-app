import React from "react";
import {useNavigate, useParams, Link, useLocation} from "react-router-dom";

import "./index.css"
import {useSelector, useDispatch} from "react-redux";
import {
  selectAssignment, updateAssignment, addAssignment
} from "../assignmentsReducer";
import {
  FaBars,
  FaCircleCheck,
  FaEllipsisVertical,
  FaPlus
} from "react-icons/fa6";
import {FaChevronRight} from "react-icons/fa";
import CourseNavigation from "../../CourseNavigation";
import MobileHeader from "../../../MobileHeader";

function AssignmentEditor({course}) {
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isFormForEdit} = useLocation().state;
  const {courseId} = useParams();
  const mobileHeaderInfo = {course: course, pageName: "Assignments"};
  const handleSave = () => {
    isFormForEdit ? dispatch(updateAssignment(assignment)) : dispatch(
        addAssignment(assignment));
    resetInitialAssignment();
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const resetInitialAssignment = () => {
    dispatch(selectAssignment({
      title: "New Assignment",
      points: 100,
      description: "Assignment Description",
      availableFromDate: "2023-01-10",
      availableUntilDate: "2023-05-15",
      dueDate: "2023-05-15"
    }))
  }
  return (
      <div className="main-content-wrapper">
        <MobileHeader obj={mobileHeaderInfo}/>
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
                <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/`}>
                  Assignments
                </Link>
              </li>
              <li className="list-group-item">
                <FaChevronRight/>
                {assignment.title}
              </li>
            </ul>
          </nav>
        </div>
        <div className="below-header-content">
          {<CourseNavigation/>}
          <div className="assignment-main-content">
            <div className="assignments-secondary-header-bar edit-page">
              <div className="btns-row">
                <button className="btn btn-primary ellipsis">
                  <FaEllipsisVertical/>
                </button>
                <div className="btn-row-publish-status">
                  <FaCircleCheck/>
                  Published
                </div>
              </div>
            </div>
            <div className="assignment-edit-form">
              <div className="edit-form-section">
                <label htmlFor="assignment-name"
                       className="form-label above-label">
                  Assignment Name
                </label>
                <input className="form-control assignment-edit-input"
                       type="text"
                       value={assignment.title} id="assignment-name"
                       onChange={(e) => dispatch(selectAssignment(
                           {...assignment, title: e.target.value}))}/>
              </div>
              <div className="edit-form-section">
            <textarea className="form-control assignment-edit-text-area"
                      value={assignment.description}
                      onChange={(e) => dispatch(selectAssignment(
                          {...assignment, description: e.target.value}))}>
            </textarea>
              </div>
              <div className="edit-form-section extra-margin">
                <label htmlFor="points-input"
                       className="form-label">Points</label>
                <input className="form-control assignment-edit-input"
                       type="number"
                       value={assignment.points}
                       id="points-input"
                       onChange={(e) => dispatch(selectAssignment(
                           {...assignment, points: e.target.value}))}/>
              </div>
              <div className="edit-form-section extra-margin">
                <label htmlFor="assignment-group-dropdown"
                       className="form-label">
                  Assignment Group
                </label>
                <select className="form-select assignment-edit-dropdown"
                        id="assignment-group-dropdown">
                  <option>ASSIGNMENTS</option>
                </select>
              </div>
              <div className="edit-form-section extra-margin">
                <label htmlFor="assignment-grade-dropdown"
                       className="form-label">
                  Display Grade as
                </label>
                <select className="form-select assignment-edit-dropdown"
                        id="assignment-grade-dropdown">
                  <option>Percentage</option>
                </select>
              </div>
              <div className="edit-form-section extra-margin">
                <label className="form-label"></label>
                <div className="form-check assignment-edit-checkbox">
                  <input className="form-check-input" type="checkbox" value=""
                         id="countTowardFinalGrade"/>
                  <label className="form-check-label"
                         htmlFor="countTowardFinalGrade">
                    Do not count this assignment towards the final grade
                  </label>
                </div>
              </div>
              <div className="edit-form-section extra-margin">
                <label htmlFor="assignment-submission-type"
                       className="form-label"
                       id="input-group-label">
                  Submission Type
                </label>
                <div className="assignment-edit-input-group">
                  <div className="edit-form-section">
                    <select className="form-select assignment-edit-dropdown"
                            id="assignment-submission-type">
                      <option>Online</option>
                    </select>
                  </div>
                  <div className="edit-form-section">
                    <label className="form-label">
                      Online Entry Options
                    </label>
                  </div>
                  <div className="edit-form-section">
                    <div className="form-check assignment-edit-checkbox">
                      <input className="form-check-input" type="checkbox"
                             value=""
                             id="textEntry"/>
                      <label className="form-check-label" htmlFor="textEntry">
                        Text Entry
                      </label>
                    </div>
                  </div>
                  <div className="edit-form-section">
                    <div className="form-check assignment-edit-checkbox">
                      <input className="form-check-input" type="checkbox"
                             value=""
                             id="websiteURL"/>
                      <label className="form-check-label" htmlFor="websiteURL">
                        Website URL
                      </label>
                    </div>
                  </div>
                  <div className="edit-form-section">
                    <div className="form-check assignment-edit-checkbox">
                      <input className="form-check-input" type="checkbox"
                             value=""
                             id="mediaRecordings"/>
                      <label className="form-check-label"
                             htmlFor="mediaRecordings">
                        Media Recordings
                      </label>
                    </div>
                  </div>
                  <div className="edit-form-section">
                    <div className="form-check assignment-edit-checkbox">
                      <input className="form-check-input" type="checkbox"
                             value=""
                             id="studentAnnotation"/>
                      <label className="form-check-label"
                             htmlFor="studentAnnotation">
                        Student Annotation
                      </label>
                    </div>
                  </div>
                  <div className="edit-form-section">
                    <div className="form-check assignment-edit-checkbox">
                      <input className="form-check-input" type="checkbox"
                             value=""
                             id="fileUploads"/>
                      <label className="form-check-label" htmlFor="fileUploads">
                        File Uploads
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="edit-form-section extra-margin last">
                <label htmlFor="assignment-submission-type"
                       className="form-label"
                       id="input-group-label">
                  Assign
                </label>
                <div className="assignment-edit-input-group">
                  <div className="edit-form-section">
                    <label className="form-label above-label"
                           htmlFor="assign_to">
                      Assign to
                    </label>
                    <select className="form-select assignment-edit-dropdown"
                            id="assignment-submission-type">
                      <option>Everyone</option>
                    </select>
                  </div>
                  <div className="edit-form-section">
                    <label className="form-label above-label"
                           htmlFor="due_date">
                      Due
                    </label>
                    <input className="form-control assignment-edit-input"
                           id="due_date" type="date" value={assignment.dueDate}
                           onChange={(e) => dispatch(selectAssignment(
                               {...assignment, dueDate: e.target.value}))}/>
                  </div>
                  <div className="d-flex flex-row gap-2">
                    <div className="flex-grow-1 edit-form-section">
                      <label className="form-label above-label"
                             htmlFor="avl_from">
                        Available from
                      </label>
                      <input className="form-control assignment-edit-input"
                             type="date" id="avl_from"
                             value={assignment.availableFromDate}
                             onChange={(e) => dispatch(selectAssignment({
                               ...assignment,
                               availableFromDate: e.target.value
                             }))}/>
                    </div>
                    <div className="flex-grow-1 edit-form-section">
                      <label className="form-label above-label"
                             htmlFor="avl_until">
                        Until
                      </label>
                      <input className="form-control assignment-edit-input"
                             type="date" id="avl_until"
                             value={assignment.availableUntilDate}
                             onChange={(e) => dispatch(selectAssignment({
                               ...assignment,
                               availableUntilDate: e.target.value
                             }))}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="edit-form-section extra-margin">
                <label className="form-label"></label>
                <button type="button" className="btn btn-primary"
                        id="add-assign-btn">
                  <FaPlus/>
                  Add
                </button>
              </div>
            </div>
            <div className="edit-form-end-btn-row">
              <div className="form-check assignment-edit-checkbox">
                <input className="form-check-input" type="checkbox" value=""
                       id="notifyUsersOption"/>
                <label className="form-check-label" htmlFor="notifyUsersOption">
                  Notify users that this content has changed
                </label>
              </div>
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button type="button" className="btn btn-primary">Cancel
                </button>
              </Link>
              <button type="button" onClick={handleSave}
                      className="btn btn-secondary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AssignmentEditor;