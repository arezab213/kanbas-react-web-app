import SecondaryNavigation from "../../SecondaryNavigation/SecondaryNavigation.js"
import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js"

function Grades() {
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
                  Grades
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
          </a>
          <a class="mobile-header-bar-icon-container icon-toggle" data-bs-toggle="collapse" aria-expanded="false" href="#collapseSN" role="button">
            <i class="fa-solid fa-chevron-down" id="chevron-down"></i>
            <i class="fa-solid fa-xmark" id="xmark"></i>
          </a>
        </div>
        <div class="collapse" id="collapseSN">
          <div class="d-xs-block d-sm-block d-md-none mobile-secondary-nav">
            ${SecondaryNavigation("Grades", "courses", true)}
          </div>
        </div>
        <div class="below-header-content">
          <div class="d-none d-md-block secondary-navigation">
            <div class="sn-list-container">
              ${SecondaryNavigation("Grades", "courses", false)}
            </div>
          </div>

            <div class="grades-main-content">
              <div class="grades-page-section justify-content-end">
                <button type="button" class="btn btn-primary top-row"><i class="fa-solid fa-file-import"></i></i>Import</button>
                <button type="button" class="btn btn-primary dropdown-toggle top-row"><i class="fa-solid fa-file-export"></i>Export</button>
                <button type="button" class="btn btn-primary icon" id="settings-btn"><i class="fa-solid fa-gear"></i></button>
              </div>
              <div class="search-fields">
                <div class="row g-3">
                  <div class="col">
                    <label for="student-names" class="form-label above-label">Student Names</label>
                  </div>
                  <div class="col">
                    <label for="assignment-names" class="form-label above-label">Assignment Names</label>
                  </div>
                </div>
                <div class="row g-3">
                  <div class="col">
                    <div class="input-group">
                      <div class="input-group-prepend grades-search">
                        <div class="input-group-text"><i class="fa fa-search"></i></div>
                      </div>
                      <input class="form-control grades-input" type="search" placeholder="Search Students" id="student-names">
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-group">
                      <div class="input-group-prepend grades-search">
                        <div class="input-group-text"><i class="fa fa-search"></i></div>
                      </div>
                      <input class="form-control grades-input" type="search" placeholder="Search Assignments" id="assignment-names">
                    </div>
                  </div>
                </div>
              </div>
              <div class="grades-page-section">
                <button type="button" class="btn btn-primary"><i class="fa-solid fa-filter"></i>Apply Filters</button>
              </div>
              <div class="grades-page-section">
                <div class="table-responsive grades-table-container">
                  <table class="table table-striped table-bordered table-hover grades-table">
                    <thead>
                      <tr>
                        <th scope="col">Student Name</th>
                        <th scope="col">A1 SETUP</th>
                        <th scope="col">A2 HTML</th>
                        <th scope="col">A3 CSS</th>
                        <th scope="col">A4 BOOTSTRAP</th>
                        <th scope="col">A5 JAVASCRIPT</th>
                        <th scope="col">A6 REACT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Anthony Kiedis</th>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                      </tr>
                      <tr>
                        <th scope="row">Flea</th>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                      </tr>
                      <tr>
                        <th scope="row">Chad Smith</th>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                      </tr>
                      <tr>
                        <th scope="row">John Frusciante</th>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export default Grades;
