import {Link, useLocation} from "react-router-dom";
import "./index.css";

import {FaRegCircleUser, FaXmark} from "react-icons/fa6";
import {FaGaugeHigh} from "react-icons/fa6";
import {FaBook} from "react-icons/fa6";
import {FaCalendarDays} from "react-icons/fa6";
import {FaInbox} from "react-icons/fa6";
import {FaRegClock} from "react-icons/fa6";
import {FaComputer} from "react-icons/fa6";
import {FaRightFromBracket} from "react-icons/fa6";
import {FaRegCircleQuestion} from "react-icons/fa6";

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
      <div className="collapse collapse-horizontal" id="collapseKN">

        <div className="d-xs-flex d-sm-flex d-md-none mobile-kanbas-nav">
          <div className="kn-mobile-header-bar">
            <Link to={"#"} className="kn-mobile-header-bar-title">
              <div className="kn-mobile-header-bar-icon-container">
                <img className="logo-mark"
                     src="../../../Images/canvas_logo_single_mark.png"
                     alt="..."/>
              </div>
              <div className="logo-label">
                KANBAS
              </div>
            </Link>
            <Link className="kn-mobile-header-bar-icon-container" id="xmark"
                  data-bs-toggle="collapse" to="#collapseKN" role="button">
              <FaXmark/>
            </Link>
          </div>
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
        </div>
      </div>

  );
}

export default MobileKanbasNavigation;