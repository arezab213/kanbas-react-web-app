import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";

import "./index.css"
import db from "../../../Database";

import {FaCircleCheck, FaEllipsisVertical, FaPlus} from "react-icons/fa6";

function AssignmentEditor() {
  const {assignmentId} = useParams();
  const assignment = db.assignments.find(
      (assignment) => assignment._id === assignmentId);

  const {courseId} = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
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
            <label htmlFor="assignment-name" className="form-label above-label">
              Assignment Name
            </label>
            <input className="form-control assignment-edit-input" type="text"
                   value={assignment.title} id="assignment-name"/>
          </div>
          <div className="edit-form-section">
            <textarea className="form-control assignment-edit-text-area">
              This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository and then deploying the content to a remote server hosted on Netlify.
            </textarea>
          </div>
          <div className="edit-form-section extra-margin">
            <label htmlFor="points-input" className="form-label">Points</label>
            <input className="form-control assignment-edit-input" type="text"
                   value="100" id="points-input"/>
          </div>
          <div className="edit-form-section extra-margin">
            <label htmlFor="assignment-group-dropdown" className="form-label">
              Assignment Group
            </label>
            <select className="form-select assignment-edit-dropdown"
                    id="assignment-group-dropdown">
              <option>ASSIGNMENTS</option>
            </select>
          </div>
          <div className="edit-form-section extra-margin">
            <label htmlFor="assignment-grade-dropdown" className="form-label">
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
            <label htmlFor="assignment-submission-type" className="form-label"
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
                  <input className="form-check-input" type="checkbox" value=""
                         id="textEntry"/>
                  <label className="form-check-label" htmlFor="textEntry">
                    Text Entry
                  </label>
                </div>
              </div>
              <div className="edit-form-section">
                <div className="form-check assignment-edit-checkbox">
                  <input className="form-check-input" type="checkbox" value=""
                         id="websiteURL"/>
                  <label className="form-check-label" htmlFor="websiteURL">
                    Website URL
                  </label>
                </div>
              </div>
              <div className="edit-form-section">
                <div className="form-check assignment-edit-checkbox">
                  <input className="form-check-input" type="checkbox" value=""
                         id="mediaRecordings"/>
                  <label className="form-check-label" htmlFor="mediaRecordings">
                    Media Recordings
                  </label>
                </div>
              </div>
              <div className="edit-form-section">
                <div className="form-check assignment-edit-checkbox">
                  <input className="form-check-input" type="checkbox" value=""
                         id="studentAnnotation"/>
                  <label className="form-check-label"
                         htmlFor="studentAnnotation">
                    Student Annotation
                  </label>
                </div>
              </div>
              <div className="edit-form-section">
                <div className="form-check assignment-edit-checkbox">
                  <input className="form-check-input" type="checkbox" value=""
                         id="fileUploads"/>
                  <label className="form-check-label" htmlFor="fileUploads">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-form-section extra-margin last">
            <label htmlFor="assignment-submission-type" className="form-label"
                   id="input-group-label">
              Assign
            </label>
            <div className="assignment-edit-input-group">
              <div className="edit-form-section">
                <label className="form-label above-label" htmlFor="assign_to">
                  Assign to
                </label>
                <select className="form-select assignment-edit-dropdown"
                        id="assignment-submission-type">
                  <option>Everyone</option>
                </select>
              </div>
              <div className="edit-form-section">
                <label className="form-label above-label" htmlFor="due_date">
                  Due
                </label>
                <input className="form-control assignment-edit-input"
                       type="date" value="2023-09-18" id="due_date"/>
              </div>
              <div className="d-flex flex-row gap-2">
                <div className="flex-grow-1 edit-form-section">
                  <label className="form-label above-label" htmlFor="avl_from">
                    Available from
                  </label>
                  <input className="form-control assignment-edit-input"
                         type="date" id="avl_from"/>
                </div>
                <div className="flex-grow-1 edit-form-section">
                  <label className="form-label above-label" htmlFor="avl_until">
                    Until
                  </label>
                  <input className="form-control assignment-edit-input"
                         type="date" id="avl_until"/>
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
            <button type="button" className="btn btn-primary">Cancel</button>
          </Link>
          <button type="button" onClick={handleSave}
                  className="btn btn-secondary">
            Save
          </button>
        </div>
      </div>
  );
}

export default AssignmentEditor;