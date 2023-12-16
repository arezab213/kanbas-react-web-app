import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css"
import {
  FaBook, FaBullhorn, FaBullseye,
  FaCircleNodes,
  FaGear,
  FaHouse,
  FaListUl,
  FaPencil,
  FaPlug, FaRegCircle,
  FaRegComments, FaRegFileLines, FaRegFolder,
  FaRocket, FaUserGroup
} from "react-icons/fa6";
import {FaClipboardList} from "react-icons/fa";

function MobileCourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
    "Quizzes", "Grades", "People", "Panopto Video", "Discussions",
    "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations",
    "Syllabus", "Progress Reports (EAB Navigate)", "Settings"];
  const {courseId} = useParams();
  const {pathname} = useLocation();
  const linksToIconsMap = {
    Home: <FaHouse/>,
    Modules: <FaCircleNodes/>,
    Piazza: <FaPlug/>,
    Zoom_Meetings: <FaPlug/>,
    Assignments: <FaPencil/>,
    Quizzes: <FaRocket/>,
    Grades: <FaBook/>,
    People: <FaUserGroup/>,
    Panopto_Video: <FaPlug/>,
    Discussions: <FaRegComments/>,
    Announcements: <FaBullhorn/>,
    Pages: <FaRegFileLines/>,
    Files: <FaRegFolder/>,
    Rubrics: <FaClipboardList/>,
    Outcomes: <FaBullseye/>,
    Collaborations: <FaRegCircle/>,
    Syllabus: <FaListUl/>,
    Progress_Reports_EAB_Navigate: <FaPlug/>,
    Settings: <FaGear/>
  }
  return (
      <ul className="mobile-secondary-nav list-group">
        {links.map((link, index) => (
            <li className={`list-group-item ${pathname.includes(
                link.replace(/\s+/g, '-')) && "active"}`}>
              <Link
                  key={index}
                  to={`/Kanbas/Courses/${courseId}/${link.replace(/\s+/g,
                      '-')}`}
                  className={`secondary-navigation-link ${pathname.includes(
                      link.replace(/\s+/g, '-')) && "active"}`}>
                {linksToIconsMap[link.replace(/ /g, '_').replace(/[^\w\s]/g,
                    '')]}
                {link}
              </Link>
            </li>
        ))}
      </ul>
  );
}

export default MobileCourseNavigation;