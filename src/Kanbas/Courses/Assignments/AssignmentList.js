import {Link, useNavigate, useParams} from "react-router-dom";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  selectAssignment, deleteAssignment
} from "./assignmentsReducer";
import {
  FaCircleCheck,
  FaEllipsisVertical,
  FaGripVertical,
  FaPencil,
  FaPlus
} from "react-icons/fa6";

function AssignmentList() {
  const navigate = useNavigate();
  const {courseId} = useParams();
  const assignments = useSelector(
      (state) => state.assignmentReducer.assignments);
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);
  const handleClickAddAssignment = () => {
    const letter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const randomNumber = Math.floor(100 + Math.random() * 900);
    const result = `${letter1}${randomNumber}`;
    dispatch(selectAssignment({...assignment, _id: result, course: courseId}))
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
  };

  function formatDate(inputDate) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const dateObj = new Date(`${inputDate}T00:00:00`);
    const monthAbbreviation = months[dateObj.getUTCMonth()];
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return `${monthAbbreviation} ${day} ${year}`;
  }

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
            <div className="assignment-row-icon-container plus"
                 onClick={handleClickAddAssignment}>
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
                    <strong>{assignment._id}</strong>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <strong>Due</strong> {formatDate(assignment.dueDate)}
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    {assignment.points ? assignment.points : 0} pts
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
