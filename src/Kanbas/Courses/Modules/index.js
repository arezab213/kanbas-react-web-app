import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  addModule,
  setModule,
} from "./modulesReducer";
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
import ModuleList from "./ModuleList";
import "./index.css"
import {FaBars, FaEllipsisVertical} from "react-icons/fa6";
import {FaPlus} from "react-icons/fa6";
import {FaRegCircleCheck} from "react-icons/fa6";
import {Link, useParams} from "react-router-dom";
import {FaChevronRight} from "react-icons/fa";
import CourseNavigation from "../CourseNavigation";
import MobileHeader from "../../MobileHeader";
import {createModule} from "./client";

function Modules({course}) {
  const {courseId} = useParams();
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [moduleModal, setModuleModal] = useState(false);
  const mobileHeaderInfo = {course: course, pageName: "Modules"};
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
                Modules
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
        </div>
      </div>
  );
}

export default Modules;