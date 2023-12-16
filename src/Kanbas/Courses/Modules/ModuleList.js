import React from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import {FaEllipsisVertical, FaGripVertical, FaPlus} from "react-icons/fa6";
import {FaCheckCircle} from "react-icons/fa";

function ModuleList() {
  const {courseId} = useParams();
  const modules = db.modules;
  return (
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
                  <div className="module-row-ellipsis-container">
                    <FaEllipsisVertical/>
                  </div>
                  <div className="module-row-icon-container">
                    <FaPlus/>
                  </div>
                  <div className="module-row-icon-container solid-check-circle">
                    <FaCheckCircle/>
                  </div>
                </div>
              </li>
          ))
        }
      </ul>
  );
}

export default ModuleList;