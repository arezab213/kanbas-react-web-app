import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
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
import {
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import {useParams} from "react-router-dom";
import {
  FaEllipsisVertical,
  FaGripVertical,
  FaPlus,
  FaXmark
} from "react-icons/fa6";
import {FaCheckCircle} from "react-icons/fa";

function ModuleList() {
  const {courseId} = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [moduleModal, setModuleModal] = useState(false);
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
  const saveButtonClick = (module) => {
    dispatch(updateModule(module));
    toggleOpen(false);
  };
  return (
      <>
        <ul className="module-content list-group">
          {
            modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
                <li key={index} className="list-group-item">
                  <div className="module-row-grip-container">
                    <FaGripVertical/>
                  </div>
                  <div className="module-header">
                    <div className="module-title">
                      {`${module.name} - ${module.description}`}
                    </div>
                  </div>
                  <div className="module-row-right-side-icons-container">
                    <div className="module-row-ellipsis-container"
                         onClick={() => {
                           dispatch(setModule(module))
                           toggleOpen(false)
                         }}>
                      <FaEllipsisVertical/>
                    </div>
                    <div className="module-row-icon-container x-mark"
                         onClick={() => {
                           dispatch(deleteModule(module._id));
                         }}>
                      <FaXmark/>
                    </div>
                    <div className="module-row-icon-container">
                      <FaPlus/>
                    </div>
                    <div
                        className="module-row-icon-container solid-check-circle">
                      <FaCheckCircle/>
                    </div>
                  </div>
                </li>
            ))
          }
        </ul>
        <MDBModal open={moduleModal} setOpen={setModuleModal}
                  tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Edit Module</MDBModalTitle>
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
                        onClick={() => saveButtonClick({...module})}>Save
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
  );
}

export default ModuleList;