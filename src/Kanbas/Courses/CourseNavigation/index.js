import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css"

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
    "Quizzes", "Grades", "People", "Panopto Video", "Discussions",
    "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations",
    "Syllabus", "Progress Reports (EAB Navigate)", "Settings"];
  const {courseId} = useParams();
  const {pathname} = useLocation();
  return (
      <div className="d-none d-md-block secondary-navigation">
        <div className="sn-list-container">
          <ul className="secondary-navigation list-group">
            {links.map((link, index) => (
                <li className={`list-group-item ${pathname.includes(
                    link.replace(/\s+/g, '-')) && "active"}`}>
                  <Link
                      key={index}
                      to={`/Kanbas/Courses/${courseId}/${link.replace(/\s+/g,
                          '-')}`}
                      className={`secondary-navigation-link ${pathname.includes(
                          link.replace(/\s+/g, '-')) && "active"}`}>
                    {link}
                  </Link>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default CourseNavigation;