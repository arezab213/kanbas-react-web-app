import React from "react";
import QuizList from "./QuizList";
import "./index.css"
import {FaBars, FaEllipsisVertical, FaPlus} from "react-icons/fa6";
import {Link, useNavigate, useParams} from "react-router-dom";
import {FaChevronRight} from "react-icons/fa";
import CourseNavigation from "../CourseNavigation";
import {selectQuiz} from "./quizzesReducer";
import {useDispatch} from "react-redux";
import MobileHeader from "../../MobileHeader";

function Quizzes({course}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {courseId} = useParams();
  const handleClickAddQuiz = () => {
    const genRanHex = size => [...Array(size)].map(
        () => Math.floor(Math.random() * 16).toString(16)).join('');
    const hexId = genRanHex(24)
    dispatch(selectQuiz({
      title: "New Quiz",
      points: 100,
      description: "Quiz Description",
      availableFromDate: "2023-01-10",
      availableUntilDate: "2023-05-15",
      dueDate: "2023-05-15",
      _id: genRanHex(24),
      course: courseId,
      published: false,
    }))
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${hexId}`,
        {state: {isFormForEdit: false}});
  };
  const mobileHeaderInfo = {course: course, pageName: "Quizzes"};
  return (
      <div className="main-content-wrapper">
        <MobileHeader obj={mobileHeaderInfo}/>
        <div className="d-none d-md-flex header-bar">
          <FaBars/>
          <nav id="breadcrumbs">
            <ul className="breadcrumbs list-group">
              <li className="list-group-item">
                <Link to={`/Kanbas/Courses/${courseId}`}>
                  {`${course.name}`}
                </Link>
              </li>
              <li className="list-group-item">
                <FaChevronRight/>
                Quizzes
              </li>
            </ul>
          </nav>
        </div>
        <div className="below-header-content">
          {<CourseNavigation/>}
          <div className="quizzes-main-content">
            <div className="quizzes-secondary-header-bar main-page">
              <input className="form-control quiz-text-input" type="text"
                     placeholder="Search for Quiz"/>
              <div className="btns-row">
                <button className="btn btn-primary ellipsis">
                  <FaEllipsisVertical/>
                </button>
                <button className="btn btn-secondary"
                        onClick={handleClickAddQuiz}>
                  <FaPlus/>
                  Quiz
                </button>
              </div>
            </div>
            <div className="quizzes-module-content">
              <QuizList/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Quizzes;
