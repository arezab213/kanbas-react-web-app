import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  selectQuiz, deleteQuiz, setQuizzes,
} from "./quizzesReducer";
import {
  FaCircleCheck,
  FaEllipsisVertical,
  FaGripVertical,
  FaRocket,
  FaXmark
} from "react-icons/fa6";
import {
  MDBBtn, MDBModal, MDBModalBody,
  MDBModalContent,
  MDBModalDialog, MDBModalFooter,
  MDBModalHeader, MDBModalTitle
} from "mdb-react-ui-kit";
import * as client from "./client";

function QuizList() {
  const navigate = useNavigate();
  const {courseId} = useParams();
  useEffect(() => {
    client.findQuizzesForCourse(courseId).then(
        (quizzes) => dispatch(setQuizzes(quizzes)));
  }, [courseId]);
  const quizzes = useSelector((state) => state.quizReducer.quizzes);
  const quiz = useSelector((state) => state.quizReducer.quiz);
  const dispatch = useDispatch();

  function formatDate(inputDate) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const dateObj = new Date(`${inputDate}`);
    const monthAbbreviation = months[dateObj.getUTCMonth()];
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return `${monthAbbreviation} ${day} ${year}`;
  }

  const handleDeleteQuiz = (quizId) => {
    client.deleteQuiz(quizId).then((status) => {
      dispatch(deleteQuiz(quizId));
    });
  };
  const [deleteQuizModal, setDeleteQuizModal] = useState(false);
  const toggleOpen = () => {
    setDeleteQuizModal(!deleteQuizModal);
  }
  return (
      <>
        <ul className="quizzes-content list-group">
          <li className="list-group-item">
            <div className="quiz-row-grip-container">
              <FaGripVertical/>
            </div>
            <div className="quiz-row-header">
              <div className="quiz-title">
                Quizzes
              </div>
            </div>
          </li>
          {
            quizzes.map((quiz) => (
                <li className="list-group-item-secondary">
                  <div className="quiz-row-icon-container rocket">
                    <FaRocket/>
                  </div>
                  <div className="quiz-information">
                    <div className="quiz-title">
                      <Link key={quiz._id}
                            onClick={() => {
                              dispatch(selectQuiz({...quiz}));
                            }}
                            to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/Details`}>
                        {quiz.title}
                      </Link>
                    </div>
                    <div className="quiz-sub-info">
                      <strong>{`${quiz.published ? "Available"
                          : "Closed"}`}</strong>
                      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                      <strong>Due</strong> {formatDate(quiz.dueDate)}
                      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                      {quiz.points ? quiz.points : 0} pts
                    </div>
                  </div>
                  <div className="row-right-side-icons-container">
                    <div className="quiz-row-ellipsis-container"
                         onClick={() => {
                           dispatch(selectQuiz({...quiz}));
                           navigate(
                               `/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/Details`);
                         }}>
                      <FaEllipsisVertical/>
                    </div>
                    <div className="quiz-row-icon-container x-mark"

                         onClick={() => {
                           dispatch(selectQuiz({...quiz}));
                           toggleOpen()
                         }}>
                      <FaXmark/>
                    </div>
                    {quiz.published && <div className="quiz-row-icon-container">
                      <FaCircleCheck/></div>}
                  </div>
                </li>
            ))
          }
        </ul>
        <MDBModal open={deleteQuizModal}
                  setOpen={setDeleteQuizModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Deleting Quiz</MDBModalTitle>
                <MDBBtn className='btn-close' color='none'
                        onClick={() => toggleOpen()}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody style={{fontWeight: 500}}>
                Are you sure you want to delete this quiz?
              </MDBModalBody>
              <MDBModalFooter>
                <button className="btn btn-secondary"
                        onClick={() => toggleOpen()}>Cancel
                </button>
                <button className="btn btn-primary" onClick={() => {
                  handleDeleteQuiz(quiz._id);
                  toggleOpen();
                }}>Yes
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
  )
}

export default QuizList
