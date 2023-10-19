import ModuleList from "./ModuleList";
import "./index.css"

import {FaEllipsisVertical} from "react-icons/fa6";
import {FaPlus} from "react-icons/fa6";
import {FaRegCircleCheck} from "react-icons/fa6";

function Modules() {
  return (
      <div className="home-main-content">
        <div className="secondary-header-bar">
          <button className="btn btn-primary ellipsis">
            <FaEllipsisVertical/>
          </button>
          <button className="btn btn-secondary add-module">
            <FaPlus/>
            Module
          </button>
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
  );
}

export default Modules;