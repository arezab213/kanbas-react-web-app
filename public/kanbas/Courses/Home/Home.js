import SecondaryNavigation from "../../SecondaryNavigation/SecondaryNavigation.js"
import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js"

function Home() {
  return `
    <div class="collapse collapse-horizontal" id="collapseKN">
      <div class="d-xs-flex d-sm-flex d-md-none mobile-kanbas-nav">
        <div class="kn-mobile-header-bar">
          <a class="kn-mobile-header-bar-title" href="#">
            <div class="kn-mobile-header-bar-icon-container">
              <img class="logo-mark" src="../../../images/canvas_logo_single_mark.png" alt="..."/>
            </div>
            <div class="logo-label">KANBAS</div>
          </a>
          <a class="kn-mobile-header-bar-icon-container" id="xmark" data-bs-toggle="collapse" href="#collapseKN" role="button">
            <i class="fa-solid fa-xmark" id="kn-xmark"></i>
          </a>
        </div>
        ${KanbasNavigation("Courses", true)}
      </div>
    </div>
    <div class="flex-row-container">
      <div class="d-none d-md-flex kanbas-navigation">
        <div class="logo-container">
          <img class="logo-mark" src="../../../images/nu_logo.png" alt="..."/>
        </div>
        ${KanbasNavigation("Courses", false)}
      </div>
      <div class="main-content-wrapper">
        <div class="d-none d-md-flex header-bar">
          <i class="fa-solid fa-bars" id="menu-button"></i>
          <div class="breadcrumb-wrapper">
            <nav id="breadcrumbs">
              <ul class="breadcrumbs list-group">
                <li class="list-group-item">
                  <a href="/Kanbas/Courses/Home/home.html">CS4550.19753.202410</a>
                </li>
                <li class="list-group-item">
                  <i class="fa-solid fa-chevron-right" id="subsection-arrow"></i>
                  Home
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="d-xs-flex d-sm-flex d-md-none mobile-header-bar">
          <a class="mobile-header-bar-icon-container" data-bs-toggle="collapse" href="#collapseKN" role="button">
            <i class="fa-solid fa-bars"></i>
          </a>
          <a class="mobile-header-title" data-bs-toggle="collapse" href="#collapseSN" role="button">
            <div>CS4550.19753.202410</div>
            <div>Modules</div>
          </a>
          <a class="mobile-header-bar-icon-container icon-toggle" data-bs-toggle="collapse" aria-expanded="false" href="#collapseSN" role="button">
            <i class="fa-solid fa-chevron-down" id="chevron-down"></i>
            <i class="fa-solid fa-xmark" id="xmark"></i>
          </a>
        </div>
        <div class="collapse" id="collapseSN">
          <div class="d-xs-block d-sm-block d-md-none mobile-secondary-nav">
            ${SecondaryNavigation("Home", "courses", true)}
          </div>
        </div>
        <div class="below-header-content">
          <div class="d-none d-md-block secondary-navigation">
            <div class="sn-list-container">
              ${SecondaryNavigation("Home", "courses", false)}
            </div>
          </div>
          <div class="home-main-content">
            <div class="secondary-header-bar">
              <button type="button" class="btn btn-primary ellipses"><i class="fa-solid fa-ellipsis-vertical"></i></button>
              <button type="button" class="btn btn-secondary"><i class="fa-solid fa-plus" id="add-module-icon"></i>Module</button>
              <button type="button" class="btn btn-primary dropdown-toggle"><i class="fa-regular fa-circle-check"  id="publish-all-check-icon"></i>Publish All</button>
              <button type="button" class="btn btn-primary">View Progress</button>
              <button type="button" class="btn btn-primary">Collapse All</button>
            </div>
            <div class="home-module-content">
              <ul class="module-content list-group">
                <li class="list-group-item"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-header"><div class="module-title">Week 0 - INTRO</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-plus"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title">LEARNING OBJECTIVES</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Introduction to the course</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Learn what is Web Development</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Creating a development Environment</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Creating a Web Application</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Getting started with the first assignment</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title">READING</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Full Stack Developer - Chapter 1 - Introduction</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title">SLIDES</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-row-icon-container link-icon"><i class="fa-solid fa-link" id="link-logo"></i></div><div class="module-information link"><div class="module-title"><a href="#">Introduction to Web Development<i class="fa-solid fa-up-right-from-square" id="external-link-icon"></i></a></div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-row-icon-container link-icon"><i class="fa-solid fa-link" id="link-logo"></i></div><div class="module-information link"><div class="module-title"><a href="#">Creating an HTTP server with Node.js<i class="fa-solid fa-up-right-from-square" id="external-link-icon"></i></a></div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
              </ul>
            </div>
            <div class="home-module-content">
              <ul class="module-content list-group">
                <li class="list-group-item"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-header"><div class="module-title">Week 1 - HTML</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-plus"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title">LEARNING OBJECTIVES</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Learn how to create user interfaces with HTML</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Keep working on assignment 1</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Deploy the assignment to Netlify</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title">READING</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Full Stack Developer - Chapter 1 - Introduction</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title indented">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-information"><div class="module-title">SLIDES</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-row-icon-container link-icon"><i class="fa-solid fa-link" id="link-logo"></i></div><div class="module-information link"><div class="module-title"><a href="#">Introduction to HTML and the DOM<i class="fa-solid fa-up-right-from-square" id="external-link-icon"></i></a></div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-row-icon-container link-icon"><i class="fa-solid fa-link" id="link-logo"></i></div><div class="module-information link"><div class="module-title"><a href="#">Formatting Web content with Headings and Paragraphs<i class="fa-solid fa-up-right-from-square" id="external-link-icon"></i></a></div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
              </ul>
            </div>
            <div class="home-module-content">
              <ul class="module-content list-group">
                <li class="list-group-item"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-header"><div class="module-title">Required Textbook</div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-plus"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-row-icon-container link-icon"><i class="fa-solid fa-link" id="link-logo"></i></div><div class="module-information link"><div class="module-title"><a href="#">Required Text - Full Stack Developer<i class="fa-solid fa-up-right-from-square" id="external-link-icon"></i></a></div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-row-icon-container link-icon"><i class="fa-solid fa-link" id="link-logo"></i></div><div class="module-information link"><div class="module-title"><a href="#">Link to Web Support Form<i class="fa-solid fa-up-right-from-square" id="external-link-icon"></i></a></div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
                <li class="list-group-item-secondary"><div class="module-row-grip-container"><i class="fa-solid fa-grip-vertical" id="module-row-grip-icon"></i></div><div class="module-row-icon-container link-icon"><i class="fa-solid fa-link" id="link-logo"></i></div><div class="module-information link"><div class="module-title"><a href="#">Link to Student Customer Service Portal<i class="fa-solid fa-up-right-from-square" id="external-link-icon"></i></a></div></div><div class="module-row-right-side-icons-container"><div class="module-row-ellipsis-container"><i class="fa-solid fa-ellipsis-vertical"></i></div><div class="module-row-icon-container"><i class="fa-solid fa-circle-check" id="solid-check-circle"></i></div></div></li>
              </ul>
            </div>
          </div>
          <div class="d-none d-xl-flex home-side-content">
            <div id="course-status-btns">
              <h5 id="home-side-panel-header">Course Status</h5>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" id="unpublish-btn"><i class="fa-solid fa-ban button-icon"></i>Unpublish</button>
                <button type="button" class="btn btn-primary" id="publish-btn"><i class="fa-regular fa-circle-check button-icon"></i>Published</button>
              </div>
              <button type="button" class="btn btn-primary"><i class="fa-solid fa-file-import button-icon"></i>Import Existing Content</button>
              <button type="button" class="btn btn-primary"><i class="fa-solid fa-right-from-bracket button-icon"></i>Import from Commons</button>
              <button type="button" class="btn btn-primary"><i class="fa-solid fa-location-crosshairs button-icon"></i>Choose Home Page</button>
              <button type="button" class="btn btn-primary"><i class="fa-solid fa-chart-column button-icon"></i>View Course Stream</button>
              <button type="button" class="btn btn-primary"><i class="fa-solid fa-bullhorn button-icon"></i>New Announcement</button>
              <button type="button" class="btn btn-primary"><i class="fa-solid fa-chart-column button-icon"></i>New Analytics</button>
              <button type="button" class="btn btn-primary"><i class="fa-regular fa-bell button-icon"></i>View Course Notifications</button>
            </div>
            <div class="btn-subsections" id="to-do-section">
              <h6 id="home-side-panel-subheader">To Do</h6>
            </div>
            <div class="btn-subsections" id="coming-up-section">
              <h6 id="home-side-panel-subheader">Coming Up</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export default Home;
