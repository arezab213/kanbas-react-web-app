import React, {useEffect} from "react"
import CourseNavigation from "../../CourseNavigation";
import MobileHeader from "../../../MobileHeader";
import {
  FaBan,
  FaBars,
  FaChevronRight,
  FaCircleCheck,
  FaEllipsisVertical, FaPlus, FaRocket, FaXmark
} from "react-icons/fa6";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectQuiz, updateQuiz} from "../quizzesReducer";
import {
  addQuestion,
  selectQuestion,
  updateQuestion,
  setQuestions,
  deleteQuestion
} from "./questionsReducer";
import QuizNav from "../QuizDetailsEditor/quizNav";
import "../QuizDetailsEditor/index.css"
import * as quizzesClient from "../client";
import * as questionsClient from "./client";

function QuizQuestions({course}) {
  const {courseId, quizId} = useParams();
  const findQuizById = async () => {
    const response = await quizzesClient.findQuizById(quizId);
    if (response !== null) {
      dispatch(selectQuiz(response));
    }
  };
  const findQuestionsForQuiz = async () => {
    const response = await questionsClient.findQuestionsForQuiz(quizId);
    if (response !== null) {
      dispatch(setQuestions(response));
    }
  };
  useEffect(() => {
    findQuizById();
    findQuestionsForQuiz();
  }, [quizId]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mobileHeaderInfo = {course: course, pageName: "Edit Quiz"};
  const quiz = useSelector((state) => state.quizReducer.quiz);
  const question = useSelector(
      (state) => state.questionsReducer.defaultQuestion)
  const questions = useSelector((state) => state.questionsReducer.questions);

  const handleAddQuestion = async () => {
    const status = await questionsClient.createQuestion(quizId, question);
    dispatch(addQuestion(question));
  };
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
                <Link
                    to={`/Kanbas/Courses/${courseId}/Quizzes/`}>
                  Quizzes
                </Link>
              </li>
              <li className="list-group-item">
                <FaChevronRight/>
                {quiz.title}
              </li>
            </ul>
          </nav>
        </div>
        <div className="below-header-content">
          {<CourseNavigation/>}
          <div className="quiz-main-content">
            <div className="quizzes-secondary-header-bar edit-page">
              <div className="btns-row">
                <button className="btn btn-primary ellipsis">
                  <FaEllipsisVertical/>
                </button>
                <div className={`btn-row-publish-status${quiz.published ? ""
                    : " unpublished"}`}>
                  {quiz.published ? <FaCircleCheck/> : <FaBan/>}
                  {`${quiz.published ? "Published" : " Unpublished"}`}
                </div>
              </div>
            </div>
            <div className="quiz-edit-form">
              <QuizNav/>
              <ul>
                {
                  questions.map((question) => (
                      <li className="list-group-item-secondary">
                        {question.title}
                      </li>
                  ))
                }
              </ul>
              <button className="btn btn-primary" onClick={handleAddQuestion}>
                <FaPlus/>
                New Question
              </button>
            </div>
            <div className="edit-form-end-btn-row">
              <div className="form-check quiz-edit-checkbox">
                <input className="form-check-input" type="checkbox" value=""
                       id="notifyUsersOption"/>
                <label className="form-check-label" htmlFor="notifyUsersOption">
                  Notify users that this quiz has changed
                </label>
              </div>
              <Link to={`/Kanbas/Courses/${courseId}/Quizzes`}>
                <button type="button" className="btn btn-primary">Cancel
                </button>
              </Link>
              <button className="btn btn-primary" type="button"
                  /*onClick={() => {
                    dispatch(selectQuiz({...quiz, published: true}));
                    handleSaveAndPublish({...quiz, published: true});
                  }}*/>
                Save & Publish
              </button>
              <button type="button" className="btn btn-secondary"
                  /*onClick={() => handleSave(quiz)}*/>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
  )

}

export default QuizQuestions;