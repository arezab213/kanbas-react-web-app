import db from "../../Database";
import "./index.css"
import {Link, useParams} from "react-router-dom";
import {FaFileExport, FaFileImport, FaFilter, FaGear} from "react-icons/fa6";
import {FaSearch} from "react-icons/fa";

function Grades() {
  const {courseId} = useParams();
  const assignments = db.assignments.filter(
      (assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter(
      (enrollment) => enrollment.course === courseId);
  return (
      <div className="grades-main-content">
        <div className="grades-page-section">
          <button type="button" className="btn btn-primary top-row">
            <FaFileImport/>
            Import
          </button>
          <button type="button"
                  className="btn btn-primary dropdown-toggle top-row">
            <FaFileExport/>
            Export
          </button>
          <button type="button" className="btn btn-primary icon"
                  id="settings-btn">
            <FaGear/>
          </button>
        </div>
        <div className="search-fields">
          <div className="row g-3">
            <div className="col">
              <label htmlFor="student-names" className="form-label above-label">
                Student Names
              </label>
            </div>
            <div className="col">
              <label htmlFor="assignment-names"
                     className="form-label above-label">
                Assignment Names
              </label>
            </div>
          </div>
          <div className="row g-3">
            <div className="col">
              <div className="input-group">
                <div className="input-group-prepend grades-search">
                  <div className="input-group-text">
                    <FaSearch/>
                  </div>
                </div>
                <input className="form-control grades-input" type="search"
                       placeholder="Search Students" id="student-names"/>
              </div>
            </div>
            <div className="col">
              <div className="input-group">
                <div className="input-group-prepend grades-search">
                  <div className="input-group-text">
                    <FaSearch/>
                  </div>
                </div>
                <input className="form-control grades-input" type="search"
                       placeholder="Search Assignments" id="assignment-names"/>
              </div>
            </div>
          </div>
        </div>
        <div className="grades-page-section justify-content-start">
          <button type="button" className="btn btn-primary">
            <FaFilter/>
            Apply Filters
          </button>
        </div>
        <div className="grades-page-section">
          <div className="table-responsive grades-table-container">
            <table className="table table-striped table-bordered grades-table">
              <thead>
              <tr>
                <th scope="col">Student Name</th>
                {assignments.map((assignment) => (
                    <th scope="col">
                      <div>
                        {assignment.title}
                      </div>
                      <div>
                        Out of 100
                      </div>
                    </th>
                ))}
              </tr>
              </thead>
              <tbody>
              <tr></tr>
              {enrollments.map((enrollment) => {
                const user = db.users.find(
                    (user) => user._id === enrollment.user);
                return (
                    <tr>
                      <th scope="row">
                        <Link to={`/Kanbas/Courses/${courseId}/Grades`}>
                          {user.firstName} {user.lastName}
                        </Link>
                      </th>
                      {assignments.map((assignment) => {
                        const grade = db.grades.find(
                            (grade) => grade.student === enrollment.user
                                && grade.assignment === assignment._id);
                        return (<td>{grade?.grade || ""}</td>);
                      })}
                    </tr>);
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>);
}

export default Grades;