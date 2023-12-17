import React, {useEffect} from "react"
import CourseNavigation from "../../CourseNavigation";
import MobileHeader from "../../../MobileHeader";
import {
  FaBan,
  FaBars,
  FaChevronRight,
  FaEllipsisVertical, FaPencil, FaRegCircleCheck
} from "react-icons/fa6";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectQuiz, updateQuiz} from "../quizzesReducer";
import "../QuizDetailsEditor/index.css"
import * as client from "../client";

function QuizDetails({course}) {
  const {courseId, quizId} = useParams();
  useEffect(() => {
    client.findQuizById(quizId).then(
        (quiz) => dispatch(selectQuiz(quiz)));
  }, [quizId]);
  const quiz = useSelector((state) => state.quizReducer.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mobileHeaderInfo = {course: course, pageName: "Edit Quiz"};
  const handleUpdateQuizPublishStatus = async () => {
    let currentlyPublished = quiz.published;
    dispatch(selectQuiz({...quiz, published: !(currentlyPublished)}));
    const status = await client.updateQuiz(
        {...quiz, published: !(currentlyPublished)});
    dispatch(updateQuiz({...quiz, published: !(currentlyPublished)}));
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
                <button type="button" className="btn btn-primary"
                        onClick={() => {
                          dispatch(selectQuiz({...quiz}));
                          navigate(
                              `/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/Edit`,
                              {state: {isFormForEdit: true}});
                        }}>
                  <FaPencil/>
                  Edit
                </button>
                <button type="button" className="btn btn-primary">
                  Preview
                </button>
                <button type="button" className="btn btn-primary"
                        id="quiz-publish-btn"
                        onClick={handleUpdateQuizPublishStatus}>
                  {quiz.published ? <FaRegCircleCheck/> : <FaBan/>}
                  {quiz.published ? "Published" : "Unpublished"}
                </button>
              </div>
            </div>
            <div className="quiz-edit-form">
              <h3>{quiz.title}</h3>
              <div>
                <strong>Points</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`${quiz.points}`}
              </div>
              <div>
                <strong>Available From</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`${quiz.availableFromDate.toString().substring(0, 10)}`}
              </div>
              <div>
                <strong>Available Until</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`${quiz.availableUntilDate.toString().substring(0, 10)}`}
              </div>
              <div>
                <strong>Due Date</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`${quiz.dueDate.toString().substring(0, 10)}`}
              </div>
              <div>
                <strong>Shuffle Answers</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`${quiz.shuffleAnswers ? "Yes" : "No"}`}
              </div>
              <div>
                <strong>Time Limit</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {`${(quiz.timeLimit === false) ? "None"
                    : quiz.timeLimit} Minutes`}
              </div>
            </div>
            <div className="edit-form-end-btn-row">
              {/*<Link to={`/Kanbas/Courses/${courseId}/Quizzes`}>
                <button type="button" className="btn btn-primary">Cancel
                </button>
              </Link>*/}
              <button type="button" className="btn btn-secondary">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
  )

}

export default QuizDetails;