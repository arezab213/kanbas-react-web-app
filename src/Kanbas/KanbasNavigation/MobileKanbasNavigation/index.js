import {Link, useLocation} from "react-router-dom";
import "./index.css";

import {
  FaRegCircleUser,
  FaGaugeHigh,
  FaBook,
  FaCalendarDays,
  FaInbox,
  FaRegClock,
  FaComputer,
  FaRightFromBracket,
  FaRegCircleQuestion
} from "react-icons/fa6";

function MobileKanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox",
    "History", "Studio", "Commons", "Help"];
  const linksToIconsMap = {
    Account: <FaRegCircleUser/>,
    Dashboard: <FaGaugeHigh/>,
    Courses: <FaBook/>,
    Calendar: <FaCalendarDays/>,
    Inbox: <FaInbox/>,
    History: <FaRegClock/>,
    Studio: <FaComputer/>,
    Commons: <FaRightFromBracket/>,
    Help: <FaRegCircleQuestion/>,
  }
  const {pathname} = useLocation();
  return (
      <ul className="mkn list-group">
        {links.map((link, index) => (
            <li className={`list-group-item ${pathname.includes(link)
            && "active"}`}>
              <Link
                  id={link}
                  key={index}
                  to={`/Kanbas/${link}`}
                  className={`kanbas-navigation-link ${pathname.includes(
                      link)
                  && "active"}`}>
                <div className="icon-container">
                  {linksToIconsMap[link]}
                </div>
                {link}
              </Link>
            </li>
        ))}
      </ul>
  );
}

export default MobileKanbasNavigation;