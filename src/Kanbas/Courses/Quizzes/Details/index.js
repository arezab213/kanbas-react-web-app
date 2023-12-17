import React from "react"
import CourseNavigation from "../../CourseNavigation";
import MobileHeader from "../../../MobileHeader";
import {
  FaBars,
  FaChevronRight,
  FaCircleCheck,
  FaEllipsisVertical, FaPencil, FaRegCircleCheck
} from "react-icons/fa6";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addQuiz, selectQuiz, updateQuiz} from "../quizzesReducer";
import "../QuizDetailsEditor/index.css"
import * as client from "../client";

function QuizDetails({course}) {
  const {courseId} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isFormForEdit} = useLocation().state;
  const mobileHeaderInfo = {course: course, pageName: "Edit Quiz"};
  const quiz = useSelector((state) => state.quizReducer.quiz);
  const handleUpdateQuiz = async () => {
    const status = await client.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
  };
  /*const handleSave = () => {
    isFormForEdit ? handleUpdateQuiz() : handleAddQuiz()
    resetInitialQuiz();
    navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
  };
  const handleAddQuiz = () => {
    client.createQuiz(courseId, quiz).then((quiz) => {
      dispatch(addQuiz(quiz));
    });
  };
  const handleUpdateQuiz = async () => {
    const status = await client.updateQuiz(quiz);
    dispatch(updateQuiz(quiz));
  };

  const resetInitialQuiz = () => {
    dispatch(selectQuiz({
      title: "New Quiz",
      points: 100,
      description: "Quiz Description",
      availableFromDate: "2023-01-10",
      availableUntilDate: "2023-05-15",
      dueDate: "2023-05-15",
      published: false,
      shuffleAnswers: false,
    }))
  }*/
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
                <button type="button" className="btn btn-primary"
                        id="publish-status-button">
                  <FaPencil/>
                  Edit
                </button>
                <button type="button" className="btn btn-primary">
                  Preview
                </button>
                <button type="button" className="btn btn-primary"
                        id="quiz-publish-btn"
                        onClick={async (e) => {
                          dispatch(selectQuiz(
                              {...quiz, published: !quiz.published}));
                          await handleUpdateQuiz()
                        }}>
                  <FaRegCircleCheck/>
                  {quiz.published ? "Published" : "Unpublished"}
                </button>
              </div>
            </div>
            <div className="quiz-edit-form">


            </div>
          </div>
        </div>
      </div>
  )

}

export default QuizDetails;