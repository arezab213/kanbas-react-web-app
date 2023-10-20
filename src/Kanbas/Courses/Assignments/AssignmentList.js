import {Link, useParams} from "react-router-dom";
import React from "react";
import db from "../../Database";

function AssignmentList() {
  const {courseId} = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);

  return (
      <ul className="assignments-content list-group">
        {courseAssignments.map((assignment) => (
            <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item">
              {assignment.title}
            </Link>
        ))}
      </ul>

  )

}

export default AssignmentList
