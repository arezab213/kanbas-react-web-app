import React from "react";

import AssignmentList from "./AssignmentList";
import "./index.css"
import {FaEllipsisVertical, FaPlus} from "react-icons/fa6";

function Assignments() {
  return (
      <div className="assignment-main-content">
        <div className="assignments-secondary-header-bar main-page">
          <input className="form-control assignment-text-input" type="text"
                 placeholder="Search for Assignment"/>
          <div className="btns-row">
            <button className="btn btn-primary ellipsis">
              <FaEllipsisVertical/>
            </button>
            <button className="btn btn-secondary">
              <FaPlus/>
              Assignment
            </button>
            <button className="btn btn-primary">
              <FaPlus/>
              Group
            </button>
          </div>
        </div>
        <div className="assignments-module-content">
          <AssignmentList/>
        </div>
      </div>
  );
}

export default Assignments;
