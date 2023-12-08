import {useState} from "react";
import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import MobileKanbasNavigation from "./KanbasNavigation/MobileKanbasNavigation";
import db from "./Database";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
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
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
    );
  };
  return (
      <Provider store={store}>
        <MobileKanbasNavigation/>
        <div className="flex-row-container">
          <KanbasNavigation/>
          <Routes>
            <Route path="/" element={<Navigate replace to="Dashboard"/>}/>
            <Route path="Dashboard" element={
              <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}/>
            }/>
            <Route path="Courses/:courseId/*"
                   element={<Courses courses={courses}/>}/>
          </Routes>
        </div>
      </Provider>
  );
}

export default Kanbas