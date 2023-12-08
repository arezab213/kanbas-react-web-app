import {Link, useParams} from "react-router-dom";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  selectAssignment, updateAssignment, deleteAssignment
} from "./assignmentsReducer";
import db from "../../Database";
import {
  FaCircleCheck,
  FaEllipsisVertical,
  FaGripVertical,
  FaPencil,
  FaPlus
} from "react-icons/fa6";

function AssignmentList() {
  const {courseId} = useParams();
  const assignments = useSelector(
      (state) => state.assignmentReducer.assignments);
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);

  return (
      <ul className="assignments-content list-group">
        <li className="list-group-item">
          <div className="assignment-row-grip-container">
            <FaGripVertical/>
          </div>
          <div className="assignment-row-header">
            <div className="assignment-title">
              Assignments
            </div>
          </div>
          <div className="row-right-side-icons-container">
            <div className="assignment-row-ellipsis-container">
              <FaEllipsisVertical/>
            </div>
            <div className="assignment-row-icon-container plus">
              <FaPlus/>
            </div>
            <span className="badge rounded-pill text-bg-primary">
              40% of Total
            </span>
          </div>
        </li>
        {
          courseAssignments.map((assignment) => (
              <li className="list-group-item-secondary">
                <div className="assignment-row-grip-container">
                  <FaGripVertical/>
                </div>
                <div className="assignment-row-icon-container">
                  <FaPencil/>
                </div>
                <div className="assignment-information">
                  <div className="assignment-title">
                    <Link key={assignment._id}
                          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                      {assignment.title}
                    </Link>
                  </div>
                  <div className="assignment-period">
                    {assignment.course}
                  </div>
                  <div className="assignment-deadline-points">
                    <strong>{assignment._id}</strong> | 100 pts
                  </div>
                </div>
                <div className="row-right-side-icons-container">
                  <div className="assignment-row-ellipsis-container">
                    <FaEllipsisVertical/>
                  </div>
                  <div className="assignment-row-icon-container">
                    <FaCircleCheck/>
                  </div>
                </div>
              </li>
          ))
        }
      </ul>

  )

}

export default AssignmentList
