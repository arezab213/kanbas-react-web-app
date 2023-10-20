import db from "../../Kanbas/Database";
import {Link, Navigate, Route, Routes, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css"

import {FaBars} from "react-icons/fa6";

function Courses() {
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
            </ul>
          </nav>
        </div>
        <div className="below-header-content">
          <CourseNavigation/>
          <Routes>
            <Route path="/" element={<Navigate to="Home"/>}/>
            <Route path="Home" element={<Home/>}/>
            <Route path="Modules" element={<Modules/>}/>
            <Route path="Assignments" element={<Assignments/>}/>
            <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}/>
            />
            <Route path="Grades" element={<Grades/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default Courses;