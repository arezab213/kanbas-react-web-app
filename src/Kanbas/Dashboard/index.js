import {useState} from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import db from "../Database";
import "./index.css"

import {FaEllipsisVertical} from "react-icons/fa6";
import {FaRegPenToSquare} from "react-icons/fa6";
import {FaBullhorn} from "react-icons/fa6";
import {FaRegComments} from "react-icons/fa6";

function Dashboard() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleOpen = () => setBasicModal(!basicModal);
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    const letter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const letter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const randomNumber = Math.floor(100 + Math.random() * 900);
    const result = `${letter1}${letter2}${randomNumber}`;
    setCourses([...courses,
      {
        ...course,
        _id: result
      }]);
  };
  const saveButtonClick = () => {
    // Call both functions
    addNewCourse();
    toggleOpen();
    setCourse({
      name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
    })
  };

  return (
      <div className="main-content-wrapper">
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
            <button className="btn btn-primary" onClick={toggleOpen}>
              Add Course
            </button>
            <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Add Course</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none'
                            onClick={toggleOpen}></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <label htmlFor="courseName" className="form-label">Course
                      Name</label>
                    <input value={course.name}
                           className="form-control modal-input" id="courseName"
                           onChange={(e) => setCourse(
                               {...course, name: e.target.value})}/>
                    <label htmlFor="courseDate" className="form-label">Course
                      Number</label>
                    <input value={course.number}
                           className="form-control modal-input"
                           id="courseNumber"
                           onChange={(e) => setCourse(
                               {...course, number: e.target.value})}/>
                    <label htmlFor="courseStartDate"
                           className="form-label">Start</label>
                    <input value={course.startDate}
                           className="form-control modal-input"
                           id="courseStartDate"
                           type="date" onChange={(e) => setCourse(
                        {...course, startDate: e.target.value})}/>
                    <label htmlFor="courseEndDate"
                           className="form-label">End</label>
                    <input value={course.endDate}
                           className="form-control modal-input"
                           id="courseEndDate"
                           type="date" onChange={(e) => setCourse(
                        {...course, endDate: e.target.value})}/>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <button className="btn btn-secondary" onClick={toggleOpen}>
                      Cancel
                    </button>
                    <button className="btn btn-primary"
                            onClick={saveButtonClick}>Add
                    </button>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
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