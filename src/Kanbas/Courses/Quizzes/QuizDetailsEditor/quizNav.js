import {Link, useLocation, useParams} from "react-router-dom";

function QuizNav({state}) {
  const {pathname} = useLocation();
  const {courseId, quizId} = useParams();
  return (
      <nav className="nav nav-tabs mb-0">
        <Link
            className={`nav-link ${pathname.includes("Edit") ? "active" : ""}`}
            to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Edit`}
            state={{isFormForEdit: state}}>
          Details
        </Link>
        <Link className={`nav-link ${pathname.includes("Questions") ? "active"
            : ""}`}
              to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Edit/Questions`}>Questions</Link>
      </nav>
  );
}

export default QuizNav;