import {Link, useLocation} from "react-router-dom";
import "./index.css";

import {FaRegCircleUser} from "react-icons/fa6";
import {FaGaugeHigh} from "react-icons/fa6";
import {FaBook} from "react-icons/fa6";
import {FaCalendarDays} from "react-icons/fa6";
import {FaInbox} from "react-icons/fa6";
import {FaRegClock} from "react-icons/fa6";
import {FaComputer} from "react-icons/fa6";
import {FaRightFromBracket} from "react-icons/fa6";
import {FaRegCircleQuestion} from "react-icons/fa6";

function KanbasNavigation() {
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
      <div className="d-none d-md-flex kanbas-navigation">
        <div className="logo-container">
          <div className="logo-container">
            <img className="logo-mark" src="../../Images/nu_logo.png"
                 alt="..."/>
          </div>
        </div>
        <ul className="kn list-group">
          {links.map((link, index) => (
              <li className={`list-group-item ${pathname.includes(link)
              && "active"}`}>
                <Link
                    id={link}
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`kanbas-navigation-link ${pathname.includes(link)
                    && "active"}`}>
                  {linksToIconsMap[link]}
                  {link}
                </Link>
              </li>
          ))}
        </ul>
      </div>

  );
}

export default KanbasNavigation;