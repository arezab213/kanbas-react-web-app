import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaChevronDown} from "react-icons/fa";
import {FaBars, FaXmark} from "react-icons/fa6";
import {MDBCollapse} from 'mdb-react-ui-kit';
import MobileCourseNavigation
  from "../Courses/CourseNavigation/MobileCourseNavigation";
import "./index.css"

function MobileHeader({obj}) {
  const [openCourseMenu, setOpenCourseMenu] = useState(false);
  if (obj.course != null) {
    return (
        <>
          <div className="d-xs-flex d-sm-flex d-md-none mobile-header-bar">
            <Link className="mobile-header-bar-icon-container"
                  data-bs-toggle="collapse" to="/">
              <FaBars/>
            </Link>
            <Link className="mobile-header-title" data-bs-toggle="collapse"
                  to="/">
              <div>{obj.course == null ? null
                  : `${obj.course._id} ${obj.course.name}`}</div>
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
        </>
    );
  } else {
    return (
        <>
          <div className="d-xs-flex d-sm-flex d-md-none mobile-header-bar">
            <Link className="mobile-header-bar-icon-container"
                  data-bs-toggle="collapse" to="/">
              <FaBars/>
            </Link>
            <Link className="mobile-header-title" data-bs-toggle="collapse"
                  to="/">
              <div>{obj.course == null ? null
                  : `${obj.course._id} ${obj.course.name}`}</div>
              <div>{obj.pageName}</div>
            </Link>
            <div className="mobile-header-bar-icon-container"></div>
          </div>
        </>
    );
  }

}

export default MobileHeader;