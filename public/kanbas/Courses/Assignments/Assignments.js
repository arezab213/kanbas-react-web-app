import SecondaryNavigation from "../../SecondaryNavigation/SecondaryNavigation.js"
import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js"

function Assignments() {
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
                  Assignments
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
            <div>Assignments</div>
          </a>
          <a class="mobile-header-bar-icon-container icon-toggle" data-bs-toggle="collapse" aria-expanded="false" href="#collapseSN" role="button">
            <i class="fa-solid fa-chevron-down" id="chevron-down"></i>
            <i class="fa-solid fa-xmark" id="xmark"></i>
          </a>
        </div>
        <div class="collapse" id="collapseSN">
          <div class="d-xs-block d-sm-block d-md-none mobile-secondary-nav">
            ${SecondaryNavigation("Assignments", "courses", true)}
          </div>
        </div>
        <div class="below-header-content">
          <div class="d-none d-md-block secondary-navigation">
            <div class="sn-list-container">
              ${SecondaryNavigation("Assignments", "courses", false)}
            </div>
          </div>
          <div class="assignment-main-content">
            <div class="secondary-header-bar main-page">
              <input class="form-control assignment-text-input" type="text" placeholder="Search for Assignment">
              <div class="btns-row">
                <button type="button" class="btn btn-primary ellipses"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                <button type="button" class="btn btn-secondary"><i class="fa-solid fa-plus" id="add-assignment-icon"></i>Assignment</button>
                <button type="button" class="btn btn-primary"><i class="fa-solid fa-plus"></i>Group</button>
              </div>
            </div>
            <div class="assignments-module-content">
              <ul class="assignments-content list-group">
                <li class="list-group-item">
                  <div class="assignment-row-grip-container">
                    <i class="fa-solid fa-grip-vertical"></i>
                  </div>
                  <div class="assignment-row-header">
                    <div class="assignment-title">
                      Assignments
                    </div>
                  </div>
                  <div class="row-right-side-icons-container">
                    <div class="assignment-row-ellipses-container">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div class="assignment-row-icon-container">
                      <i class="fa-solid fa-plus"></i>
                    </div>
                    <span class="badge rounded-pill text-bg-primary">40% of Total</span>
                  </div>
                </li>
                <li class="list-group-item-secondary">
                  <div class="assignment-row-grip-container">
                    <i class="fa-solid fa-grip-vertical"></i>
                  </div>
                  <div class="assignment-row-icon-container">
                    <i class="fa-solid fa-pencil"></i>
                  </div>
                  <div class="assignment-information">
                    <div class="assignment-title">
                      <a href="/Kanbas/Courses/Assignments/edit.html">A1 SETUP</a>
                    </div>
                    <div class="assignment-period">
                      Week 0 - SETUP  |
                    </div>
                    <div class="assignment-deadline-points">
                      <strong>Due</strong> Sep 18, 2022 at 11:59pm  |  100 pts
                    </div>
                  </div>
                  <div class="row-right-side-icons-container">
                    <div class="assignment-row-ellipses-container">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div class="assignment-row-icon-container">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item-secondary">
                  <div class="assignment-row-grip-container">
                    <i class="fa-solid fa-grip-vertical"></i>
                  </div>
                  <div class="assignment-row-icon-container">
                    <i class="fa-solid fa-pencil"></i>
                  </div>
                  <div class="assignment-information">
                    <div class="assignment-title">
                      <a href="/Kanbas/Courses/Assignments/edit.html">A2 HTML</a>
                    </div>
                    <div class="assignment-period">
                      Week 1 - HTML  |
                    </div>
                    <div class="assignment-deadline-points">
                      <strong>Due</strong> Sep 25, 2022 at 11:59pm  |  100 pts
                    </div>
                  </div>
                  <div class="row-right-side-icons-container">
                    <div class="assignment-row-ellipses-container">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div class="assignment-row-icon-container">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item-secondary">
                  <div class="assignment-row-grip-container">
                    <i class="fa-solid fa-grip-vertical"></i>
                  </div>
                  <div class="assignment-row-icon-container">
                    <i class="fa-solid fa-pencil"></i>
                  </div>
                  <div class="assignment-information">
                    <div class="assignment-title">
                      <a href="/Kanbas/Courses/Assignments/edit.html">A3 CSS</a>
                    </div>
                    <div class="assignment-period">
                      Week 2 - CSS  |
                    </div>
                    <div class="assignment-deadline-points">
                      <strong>Due</strong> Oct 2, 2022 at 11:59pm  |  100 pts
                    </div>
                  </div>
                  <div class="row-right-side-icons-container">
                    <div class="assignment-row-ellipses-container">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div class="assignment-row-icon-container">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item-secondary">
                  <div class="assignment-row-grip-container">
                    <i class="fa-solid fa-grip-vertical"></i>
                  </div>
                  <div class="assignment-row-icon-container">
                    <i class="fa-solid fa-pencil"></i>
                  </div>
                  <div class="assignment-information">
                    <div class="assignment-title">
                      <a href="/Kanbas/Courses/Assignments/edit.html">A4 BOOTSTRAP</a>
                    </div>
                    <div class="assignment-period">
                      Week 3 - Bootstrap  |
                    </div>
                    <div class="assignment-deadline-points">
                      <strong>Due</strong> Oct 10, 2022 at 11:59pm  |  100 pts
                    </div>
                  </div>
                  <div class="row-right-side-icons-container">
                    <div class="assignment-row-ellipses-container">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div class="assignment-row-icon-container">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item-secondary">
                  <div class="assignment-row-grip-container">
                    <i class="fa-solid fa-grip-vertical"></i>
                  </div>
                  <div class="assignment-row-icon-container">
                    <i class="fa-solid fa-pencil"></i>
                  </div>
                  <div class="assignment-information">
                    <div class="assignment-title">
                      <a href="/Kanbas/Courses/Assignments/edit.html">A5 JAVASCRIPT</a>
                    </div>
                    <div class="assignment-period">
                      Week 4 - JavaScript  |
                    </div>
                    <div class="assignment-deadline-points">
                      <strong>Due</strong> Oct 16, 2022 at 11:59pm  |  100 pts
                    </div>
                  </div>
                  <div class="row-right-side-icons-container">
                    <div class="assignment-row-ellipses-container">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div class="assignment-row-icon-container">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                  </div>
                </li>
                <li class="list-group-item-secondary">
                  <div class="assignment-row-grip-container">
                    <i class="fa-solid fa-grip-vertical"></i>
                  </div>
                  <div class="assignment-row-icon-container">
                    <i class="fa-solid fa-pencil"></i>
                  </div>
                  <div class="assignment-information">
                    <div class="assignment-title">
                      <a href="/Kanbas/Courses/Assignments/edit.html">A6 REACT</a>
                    </div>
                    <div class="assignment-period">
                      Week 5 - React & Routing  |
                    </div>
                    <div class="assignment-deadline-points">
                      <strong>Due</strong> Oct 23, 2023 at 11:59pm  |  100 pts
                    </div>
                  </div>
                  <div class="row-right-side-icons-container">
                    <div class="assignment-row-ellipses-container">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <div class="assignment-row-icon-container">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export default Assignments;
