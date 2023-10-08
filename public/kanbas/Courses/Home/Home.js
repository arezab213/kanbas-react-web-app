import SecondaryNavigation from "../../SecondaryNavigation/SecondaryNavigation.js"
import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js"

function Home() {
  return `
    <div class="flex-row-container">
      <div class="kanbas-navigation">
        <div class="logo-container">
          <img class="logo-mark" src="../../../images/nu_logo.png" alt="..."/>
        </div>
        <div>
          ${KanbasNavigation("Courses")}
        </div>
      </div>
      <div class="main-content-wrapper">
        <div class="header-bar">
          <i class="fa-solid fa-bars" id="menu-button"></i>
          <div class="breadcrumb-wrapper">
            <nav id="breadcrumbs">
              <ul class="breadcrumbs list-group">
                <li class="list-group-item">
                  <a href="#">CS4550.19753.202410</a>
                </li>
                <li class="list-group-item">
                  <i class="fa-solid fa-chevron-right" id="subsection-arrow"></i>
                  Home
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="below-header-content">
        <div class="secondary-navigation">
          <div class="sn-list-container">
            ${SecondaryNavigation("Home", "courses")}
          <div>
        </div>
        </div>
      </div>
    </div>
`;
}

export default Home;

/*
<table width="100%">
    <tbody>
    <tr>
      <td valign="top">
        ${KanbasNavigation("Courses")}
      </td>

      <td valign="top">
        ${CourseNavigation("Home")}
      </td>

      <td valign="top">
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
          <option>Publish All</option>
          <option>Publish Only Modules</option>
          <option>Unpublish All</option>
        </select>
        <button>+ Module</button>
        <ul>
          <li>
            <h2>Week 0 - INTRO</h2>
            <ul>
              <li>LEARNING OBJECTIVES
                <ul>
                  <li>Introduction to the course</li>
                  <li>Learn what is Web Development</li>
                  <li>Creating a development Environment</li>
                  <li>Creating a Web Application</li>
                  <li>Getting started with the first assignment</li>
                </ul>
              </li>
              <li>READING
                <ul>
                  <li>Full Stack Developer - Chapter 1 - Introduction</li>
                  <li>Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
                </ul>
              </li>
              <li>SLIDES
                <ul>
                  <li>
                    <a href="#">Introduction to Web Development</a>
                  </li>
                  <li>
                    <a href="#">Creating an HTTP server with Node.js</a>
                  </li>
                  <li>
                    <a href="#">Creating a React Application</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <h2>Week 1 - HTML</h2>
            <ul>
              <li>LEARNING OBJECTIVES
                <ul>
                  <li>Learn how to create user interfaces with HTML</li>
                  <li>Keep working on assignment 1</li>
                  <li>Deploy the assignment to Netlify</li>
                </ul>
              </li>
              <li>READING
                <ul>
                  <li>Full Stack Developer - Chapter 1 - Introduction</li>
                  <li>Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </td>

      <td valign="top">
        <h1>Course Status</h1>
        <button>Unpublished</button>
        <button>Publish</button>
        <ul>
          <li>
            <a href="#">Import Existing Content</a>
          </li>
          <li>
            <a href="#">Import From Commons</a>
          </li>
          <li>
            <a href="#">Choose Home Page</a>
          </li>
          <li>
            <a href="#">View Course Stream</a>
          </li>
          <li>
            <a href="#">New Announcements</a>
          </li>
          <li>
            <a href="#">New Analytics</a>
          </li>
          <li>
            <a href="#">View Course Notifications</a>
          </li>
        </ul>
        <h1>Coming Up</h1>
        <a href="#">View Calendar</a>
        <ul>
          <li>
            <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
          </li>
          <li>
            <a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
          </li>
          <li>
            <a href="#">Lecture CS5610.06.SP23 Lecture Sep 11 at 6pm</a>
          </li>
        </ul>
      </td>
    </tr>
    </tbody>
  </table>*/
