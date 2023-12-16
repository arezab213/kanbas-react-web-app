import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaChevronDown, FaBars, FaXmark} from "react-icons/fa6";
import {
  MDBCollapse,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import MobileCourseNavigation
  from "../Courses/CourseNavigation/MobileCourseNavigation";
import "./index.css"
import MobileKanbasNavigation from "../KanbasNavigation/MobileKanbasNavigation";

function MobileHeader({obj}) {
  const [openCourseMenu, setOpenCourseMenu] = useState(false);
  const [openKanbasMenu, setOpenKanbasMenu] = useState(false);
  if (obj.course != null) {
    return (
        <>
          <div className="d-xs-flex d-sm-flex d-md-none mobile-header-bar">
            <Link className="mobile-header-bar-icon-container" to="/"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenKanbasMenu(!openKanbasMenu);
                  }}>
              <FaBars/>
            </Link>
            <Link className="mobile-header-title" to="/"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenKanbasMenu(!openKanbasMenu);
                  }}>
              <div>{`${obj.course._id} ${obj.course.name}`}</div>
              <div>{obj.pageName}</div>
            </Link>
            <Link className="mobile-header-bar-icon-container icon-toggle"
                  aria-expanded={openCourseMenu} to="/" id="courseMenuButton"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenCourseMenu(!openCourseMenu);
                  }}>
              <FaChevronDown id="chevron-down"/>
              <FaXmark id="x-mark"/>
            </Link>
          </div>
          <MDBCollapse open={openCourseMenu}>
            <div
                className="d-xs-block d-sm-block d-md-none mobile-secondary-nav">
              <MobileCourseNavigation/>
            </div>
          </MDBCollapse>
          <div className="d-xs-flex d-sm-flex d-md-none">
            <MDBModal open={openKanbasMenu} setOpen={setOpenKanbasMenu}
                      tabIndex='-1'>
              <MDBModalDialog size="fullscreen">
                <MDBModalContent>
                  <MDBModalHeader className="kn-mobile-header-bar">
                    <Link to="/Kanbas" className="kn-mobile-header-bar-title">
                      <div className="kn-mobile-header-bar-icon-container">
                        <img className="logo-mark"
                             src="../../Images/Canvas_logo_single_mark.png"
                             alt="..."/>
                      </div>
                      <div className="logo-label">
                        KANBAS
                      </div>
                    </Link>
                    <MDBBtn
                        className='kn-mobile-header-bar-icon-container btn-close'
                        color='none'
                        onClick={() => setOpenKanbasMenu(!openKanbasMenu)}>
                    </MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <MobileKanbasNavigation/>
                  </MDBModalBody>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>
        </>
    );
  } else {
    return (
        <>
          <div className="d-xs-flex d-sm-flex d-md-none mobile-header-bar">
            <Link className="mobile-header-bar-icon-container" to="/"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenKanbasMenu(!openKanbasMenu);
                  }}>
              <FaBars/>
            </Link>
            <Link className="mobile-header-title" to="/"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenKanbasMenu(!openKanbasMenu);
                  }}>
              <div>{obj.pageName}</div>
            </Link>
            <div className="mobile-header-bar-icon-container"></div>
          </div>
          <div className="d-xs-flex d-sm-flex d-md-none">
            <MDBModal open={openKanbasMenu} setOpen={setOpenKanbasMenu}
                      tabIndex='-1'>
              <MDBModalDialog size="fullscreen">
                <MDBModalContent>
                  <MDBModalHeader className="kn-mobile-header-bar">
                    <Link to="/Kanbas" className="kn-mobile-header-bar-title">
                      <div className="kn-mobile-header-bar-icon-container">
                        <img className="logo-mark"
                             src="../../Images/Canvas_logo_single_mark.png"
                             alt="..."/>
                      </div>
                      <div className="logo-label">
                        KANBAS
                      </div>
                    </Link>
                    <MDBBtn
                        className='kn-mobile-header-bar-icon-container btn-close'
                        color='none'
                        onClick={() => setOpenKanbasMenu(!openKanbasMenu)}>
                    </MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <MobileKanbasNavigation/>
                  </MDBModalBody>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>
        </>
    );
  }
}

export default MobileHeader;