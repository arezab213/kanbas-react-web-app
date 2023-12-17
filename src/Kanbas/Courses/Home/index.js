import ModuleList from "../Modules/ModuleList";
import "./index.css"

import {
  FaBan, FaBullhorn, FaChartColumn,
  FaEllipsisVertical, FaLocationCrosshairs,
  FaPlus, FaRegBell, FaFileImport,
  FaRegCircleCheck, FaRightFromBracket, FaBars
} from "react-icons/fa6";
import {Link, useParams} from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import {FaChevronRight} from "react-icons/fa";
import {
  MDBBtn,
  MDBModal, MDBModalBody,
  MDBModalContent,
  MDBModalDialog, MDBModalFooter,
  MDBModalHeader, MDBModalTitle
} from "mdb-react-ui-kit";
import {addModule, setModule} from "../Modules/modulesReducer";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import MobileHeader from "../../MobileHeader";
import {createModule} from "../Modules/client";

function Home({course}) {
  const {courseId} = useParams();
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [moduleModal, setModuleModal] = useState(false);
  const mobileHeaderInfo = {course: course, pageName: "Home"};
  const toggleOpen = (resetInitialModule = true) => {
    setModuleModal(!moduleModal);
    if (resetInitialModule) {
      dispatch(
          setModule({
            name: "New Module 123",
            description: "New Description"
          }))
    }
  }
  const handleAddModule = (module) => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
    toggleOpen(false);
  };
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
                Home
              </li>
            </ul>
          </nav>
        </div>
        <div className="below-header-content">
          {<CourseNavigation/>}
          <div className="home-main-content">
            <div className="secondary-header-bar">
              <button className="btn btn-primary ellipsis">
                <FaEllipsisVertical/>
              </button>
              <button className="btn btn-secondary add-module" onClick={() => {
                toggleOpen()
              }}>
                <FaPlus/>
                Module
              </button>
              <MDBModal open={moduleModal} setOpen={setModuleModal}
                        tabIndex='-1'>
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Add Module</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none'
                              onClick={() => toggleOpen(false)}>
                      </MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <label htmlFor="moduleName" className="form-label">Module
                        Title</label>
                      <input value={module.name}
                             className="form-control modal-input"
                             id="moduleName"
                             onChange={(e) => dispatch(setModule(
                                 {...module, name: e.target.value}))}/>
                      <label htmlFor="moduleDescription"
                             className="form-label">Description</label>
                      <textarea value={module.description}
                                className="form-control modal-input"
                                id="moduleDescription"
                                onChange={(e) => dispatch(setModule(
                                    {
                                      ...module,
                                      description: e.target.value
                                    }))}/>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <button className="btn btn-secondary"
                              onClick={() => toggleOpen(false)}>
                        Cancel
                      </button>
                      <button className="btn btn-primary"
                              onClick={() => handleAddModule(
                                  {...module, course: courseId})}>Add Module
                      </button>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
              <button className="btn btn-primary dropdown-toggle publish-all">
                <FaRegCircleCheck/>
                Publish All
              </button>
              <button className="btn btn-primary">View Progress</button>
              <button className="btn btn-primary">Collapse All</button>
            </div>
            <div className="home-module-content">
              <ModuleList/>
            </div>
          </div>
          <div className="d-none d-xl-flex home-side-content">
            <div id="course-status-btns">
              <h5 id="home-side-panel-header">Course Status</h5>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary"
                        id="unpublish-btn">
                  <FaBan/>
                  Unpublish
                </button>
                <button type="button" className="btn btn-primary"
                        id="publish-btn">
                  <FaRegCircleCheck/>
                  Published
                </button>
              </div>
              <button type="button" className="btn btn-primary">
                <FaFileImport/>
                Import Existing Content
              </button>
              <button type="button" className="btn btn-primary">
                <FaRightFromBracket/>
                Import from Commons
              </button>
              <button type="button" className="btn btn-primary">
                <FaLocationCrosshairs/>
                Choose Home Page
              </button>
              <button type="button" className="btn btn-primary">
                <FaChartColumn/>
                View Course Stream
              </button>
              <button type="button" className="btn btn-primary">
                <FaBullhorn/>
                New Announcement
              </button>
              <button type="button" className="btn btn-primary">
                <FaChartColumn/>
                New Analytics
              </button>
              <button type="button" className="btn btn-primary">
                <FaRegBell/>
                View Course Notifications
              </button>
            </div>
            <div className="btn-subsections" id="to-do-section">
              <h6 id="home-side-panel-subheader">To Do</h6>
            </div>
            <div className="btn-subsections" id="coming-up-section">
              <h6 id="home-side-panel-subheader">Coming Up</h6>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;