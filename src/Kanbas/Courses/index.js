import {useState, useEffect} from "react";
import axios from "axios";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css"
import Quizzes from "./Quizzes";
import QuizDetailsEditor from "./Quizzes/QuizDetailsEditor";
import QuizDetails from "./Quizzes/Details";

function Courses() {
  const {courseId} = useParams();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
        `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
      <>
        <Routes>
          <Route path="/" element={<Navigate replace to="Home"/>}/>
          <Route path="Home" element={<Home course={course}/>}/>
          <Route path="Modules" element={<Modules course={course}/>}/>
          <Route path="Assignments" element={<Assignments course={course}/>}/>
          <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor course={course}/>}/>
          />
          <Route path="Quizzes" element={<Quizzes course={course}/>}/>
          <Route
              path="Quizzes/:quizId/Edit"
              element={<QuizDetailsEditor course={course}/>}/>
          />
          <Route
              path="Quizzes/:quizId/Details"
              element={<QuizDetails course={course}/>}/>
          />
          <Route path="Grades" element={<Grades course={course}/>}/>
        </Routes>
      </>
  );
}

export default Courses;
