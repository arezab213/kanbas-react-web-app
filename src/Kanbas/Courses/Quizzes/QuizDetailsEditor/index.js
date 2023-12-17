import React, {useEffect} from "react"
import CourseNavigation from "../../CourseNavigation";
import MobileHeader from "../../../MobileHeader";
import {
  FaBan,
  FaBars,
  FaChevronRight,
  FaCircleCheck,
  FaEllipsisVertical, FaPlus
} from "react-icons/fa6";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addQuiz, selectQuiz, updateQuiz} from "../quizzesReducer";
import QuizNav from "./quizNav";
import "./index.css"
import * as client from "../client";

function QuizDetailsEditor({course}) {
  const {courseId, quizId} = useParams();
  const findQuizById = async () => {
    const response = await client.findQuizById(quizId);
    if (response !== null) {
      dispatch(selectQuiz(response));
    }
  };
  useEffect(() => {
    findQuizById();
  }, [quizId]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isFormForEdit} = useLocation().state;
  const mobileHeaderInfo = {course: course, pageName: "Edit Quiz"};
  const quiz = useSelector((state) => state.quizReducer.quiz);
  const handleSave = (quiz) => {
    isFormForEdit ? handleUpdateQuiz(quiz) : handleAddQuiz(
        {...quiz, _id: quizId})
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Details`);
  };
  const handleSaveAndPublish = (quiz) => {
    isFormForEdit ? handleUpdateQuiz(quiz) : handleAddQuiz(quiz)
    navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
  };
  const handleAddQuiz = (quiz) => {
    client.createQuiz(courseId, quiz).then((quiz) => {
      dispatch(addQuiz(quiz));
    });
  };
  const handleUpdateQuiz = async (quiz) => {
    const status = await client.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
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
              <QuizNav state={isFormForEdit}/>
              <div className="edit-form-section">
                <input className="form-control quiz-edit-input mt-3"
                       type="text"
                       value={quiz.title} id="quiz-name"
                       onChange={(e) => dispatch(selectQuiz(
                           {...quiz, title: e.target.value}))}/>
              </div>
              <div className="edit-form-section">
                <textarea className="form-control quiz-edit-text-area"
                          value={quiz.description}
                          onChange={(e) => dispatch(selectQuiz(
                              {...quiz, description: e.target.value}))}>
                </textarea>
              </div>
              <div className="edit-form-section extra-margin">
                <label htmlFor="points-input"
                       className="form-label">Points</label>
                <input className="form-control quiz-edit-input"
                       type="number"
                       value={quiz.points}
                       id="points-input"
                       onChange={(e) => dispatch(selectQuiz(
                           {
                             ...quiz,
                             points: parseInt(e.target.value)
                           }))}/>
              </div>
              <div className="edit-form-section extra-margin">
                <label className="form-label"></label>
                <div className="form-check quiz-edit-checkbox">
                  <input className="form-check-input" type="checkbox"
                         id="shuffleAnswers"
                         checked={(quiz.shuffleAnswers)}
                         onChange={(e) => dispatch(selectQuiz(
                             {...quiz, shuffleAnswers: e.target.checked}))}/>
                  <label className="form-check-label"
                         htmlFor="shuffleAnswers">
                    Shuffle Answers
                  </label>
                </div>
              </div>
              <div className="edit-form-section extra-margin last">
                <label htmlFor="quiz-submission-type"
                       className="form-label"
                       id="input-group-label">
                  Assign
                </label>
                <div className="quiz-edit-input-group">
                  <div className="edit-form-section">
                    <label className="form-label above-label"
                           htmlFor="due_date">
                      Due
                    </label>
                    <input className="form-control quiz-edit-input"
                           id="due_date" type="date"
                           value={quiz.dueDate.toString().substring(0, 10)}
                           onChange={(e) => dispatch(selectQuiz(
                               {...quiz, dueDate: e.target.value}))}/>
                  </div>
                  <div className="d-flex flex-row gap-2">
                    <div className="flex-grow-1 edit-form-section">
                      <label className="form-label above-label"
                             htmlFor="avl_from">
                        Available from
                      </label>
                      <input className="form-control quiz-edit-input"
                             type="date" id="avl_from"
                             value={quiz.availableFromDate.toString().substring(
                                 0, 10)}
                             onChange={(e) => dispatch(selectQuiz({
                               ...quiz,
                               availableFromDate: e.target.value
                             }))}/>
                    </div>
                    <div className="flex-grow-1 edit-form-section">
                      <label className="form-label above-label"
                             htmlFor="avl_until">
                        Until
                      </label>
                      <input className="form-control quiz-edit-input"
                             type="date" id="avl_until"
                             value={quiz.availableUntilDate.toString().substring(
                                 0, 10)}
                             onChange={(e) => dispatch(selectQuiz({
                               ...quiz,
                               availableUntilDate: e.target.value
                             }))}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="edit-form-section extra-margin">
                <label className="form-label"></label>
                <button type="button" className="btn btn-primary"
                        id="add-assign-btn">
                  <FaPlus/>
                  Add
                </button>
              </div>
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
                      onClick={() => {
                        dispatch(selectQuiz({...quiz, published: true}));
                        handleSaveAndPublish({...quiz, published: true});
                      }}>
                Save & Publish
              </button>
              <button type="button" className="btn btn-secondary"
                      onClick={() => handleSave(quiz)}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
  )

}

export default QuizDetailsEditor;