import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./styles.css";
import MobileKanbasNavigation from "./KanbasNavigation/MobileKanbasNavigation";

function Kanbas() {
  return (
      <>
        <MobileKanbasNavigation/>
        <div className="flex-row-container">
          <KanbasNavigation/>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard"/>}/>
            <Route path="Dashboard" element={<Dashboard/>}/>
            <Route path="Courses/:courseId/*" element={<Courses/>}/>
          </Routes>
        </div>
      </>
  );
}

export default Kanbas