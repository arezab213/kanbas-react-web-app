import SecondaryNavigation from "../SecondaryNavigation/SecondaryNavigation.js"
import KanbasNavigation from "../KanbasNavigation/KanbasNavigation.js"

function Dashboard() {
  return `
    <div class="flex-row-container">
      <div class="kanbas-navigation">
        <div class="logo-container">
          <img class="logo-mark" src="../../../images/nu_logo.png" alt="..."/>
        </div>
        <div>
          ${KanbasNavigation("Dashboard")}
        </div>
      </div>
      <div class="main-content-wrapper">
        <div class="header-bar">
          <div class="breadcrumb-wrapper">
            <nav id="breadcrumbs">
              <ul class="breadcrumbs list-group">
                <li class="list-group-item" id="dashboard-header">
                  Dashboard
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="dashboard-main-content-wrapper">
          <div class="header-bar">
            Published Courses (8)
          </div>
          <div class="course-cards-container">
            <div class="d-flex flex-row flex-wrap card-row">
              <div class="card dashboard-course-card">
                <div class="dashboard-card-header">
                  <div class="card-header-button">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <a href="/Kanbas/Courses/Home/home.html">
                  <div class="card-body dashboard-card">
                    <h6 class="dashboard-card-title">CS4550 19753 Web Development SEC 02 Fall 2023 [BOS-1-TR]</h5>
                    <div class="dashboard-card-subtitle">CS4550.19753.202410</div>
                    <div class="dashboard-card-course-term">202410_1 Fall 2023 Semester Full Term</div>
                  </div>
                </a>
                <div class="dashboard-card-base">
                  <a href="#"><i class="fa-regular fa-pen-to-square"></i></a>
                  <a href="#"><i class="fa-solid fa-bullhorn"></i></a>
                  <a href="#"><i class="fa-regular fa-comments"></i></a>
                </div>
              </div>
              <div class="card dashboard-course-card">
                <div class="dashboard-card-header">
                  <div class="card-header-button">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <a href="/Kanbas/Courses/Home/home.html">
                  <div class="card-body dashboard-card">
                    <h6 class="dashboard-card-title">CS4550 19753 Web Development SEC 02 Fall 2023 [BOS-1-TR]</h5>
                    <div class="dashboard-card-subtitle">CS4550.19753.202410</div>
                    <div class="dashboard-card-course-term">202410_1 Fall 2023 Semester Full Term</div>
                  </div>
                </a>
                <div class="dashboard-card-base">
                  <a href="#"><i class="fa-regular fa-pen-to-square"></i></a>
                  <a href="#"><i class="fa-solid fa-bullhorn"></i></a>
                  <a href="#"><i class="fa-regular fa-comments"></i></a>
                </div>
              </div>
              <div class="card dashboard-course-card">
                <div class="dashboard-card-header">
                  <div class="card-header-button">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <a href="/Kanbas/Courses/Home/home.html">
                  <div class="card-body dashboard-card">
                    <h6 class="dashboard-card-title">CS4550 19753 Web Development SEC 02 Fall 2023 [BOS-1-TR]</h5>
                    <div class="dashboard-card-subtitle">CS4550.19753.202410</div>
                    <div class="dashboard-card-course-term">202410_1 Fall 2023 Semester Full Term</div>
                  </div>
                </a>
                <div class="dashboard-card-base">
                  <a href="#"><i class="fa-regular fa-pen-to-square"></i></a>
                  <a href="#"><i class="fa-solid fa-bullhorn"></i></a>
                  <a href="#"><i class="fa-regular fa-comments"></i></a>
                </div>
              </div>
              <div class="card dashboard-course-card">
                <div class="dashboard-card-header">
                  <div class="card-header-button">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <a href="/Kanbas/Courses/Home/home.html">
                  <div class="card-body dashboard-card">
                    <h6 class="dashboard-card-title">CS4550 19753 Web Development SEC 02 Fall 2023 [BOS-1-TR]</h5>
                    <div class="dashboard-card-subtitle">CS4550.19753.202410</div>
                    <div class="dashboard-card-course-term">202410_1 Fall 2023 Semester Full Term</div>
                  </div>
                </a>
                <div class="dashboard-card-base">
                  <a href="#"><i class="fa-regular fa-pen-to-square"></i></a>
                  <a href="#"><i class="fa-solid fa-bullhorn"></i></a>
                  <a href="#"><i class="fa-regular fa-comments"></i></a>
                </div>
              </div>
              <div class="card dashboard-course-card">
                <div class="dashboard-card-header">
                  <div class="card-header-button">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <a href="/Kanbas/Courses/Home/home.html">
                  <div class="card-body dashboard-card">
                    <h6 class="dashboard-card-title">CS4550 19753 Web Development SEC 02 Fall 2023 [BOS-1-TR]</h5>
                    <div class="dashboard-card-subtitle">CS4550.19753.202410</div>
                    <div class="dashboard-card-course-term">202410_1 Fall 2023 Semester Full Term</div>
                  </div>
                </a>
                <div class="dashboard-card-base">
                  <a href="#"><i class="fa-regular fa-pen-to-square"></i></a>
                  <a href="#"><i class="fa-solid fa-bullhorn"></i></a>
                  <a href="#"><i class="fa-regular fa-comments"></i></a>
                </div>
              </div>
              <div class="card dashboard-course-card">
                <div class="dashboard-card-header">
                  <div class="card-header-button">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <a href="/Kanbas/Courses/Home/home.html">
                  <div class="card-body dashboard-card">
                    <h6 class="dashboard-card-title">CS4550 19753 Web Development SEC 02 Fall 2023 [BOS-1-TR]</h5>
                    <div class="dashboard-card-subtitle">CS4550.19753.202410</div>
                    <div class="dashboard-card-course-term">202410_1 Fall 2023 Semester Full Term</div>
                  </div>
                </a>
                <div class="dashboard-card-base">
                  <a href="#"><i class="fa-regular fa-pen-to-square"></i></a>
                  <a href="#"><i class="fa-solid fa-bullhorn"></i></a>
                  <a href="#"><i class="fa-regular fa-comments"></i></a>
                </div>
              </div>
              <div class="card dashboard-course-card">
                <div class="dashboard-card-header">
                  <div class="card-header-button">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <a href="/Kanbas/Courses/Home/home.html">
                  <div class="card-body dashboard-card">
                    <h6 class="dashboard-card-title">CS4550 19753 Web Development SEC 02 Fall 2023 [BOS-1-TR]</h5>
                    <div class="dashboard-card-subtitle">CS4550.19753.202410</div>
                    <div class="dashboard-card-course-term">202410_1 Fall 2023 Semester Full Term</div>
                  </div>
                </a>
                <div class="dashboard-card-base">
                  <a href="#"><i class="fa-regular fa-pen-to-square"></i></a>
                  <a href="#"><i class="fa-solid fa-bullhorn"></i></a>
                  <a href="#"><i class="fa-regular fa-comments"></i></a>
                </div>
              </div>
              <div class="card dashboard-course-card">
                <div class="dashboard-card-header">
                  <div class="card-header-button">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </div>
                <a href="/Kanbas/Courses/Home/home.html">
                  <div class="card-body dashboard-card">
                    <h6 class="dashboard-card-title">CS4550 19753 Web Development SEC 02 Fall 2023 [BOS-1-TR]</h5>
                    <div class="dashboard-card-subtitle">CS4550.19753.202410</div>
                    <div class="dashboard-card-course-term">202410_1 Fall 2023 Semester Full Term</div>
                  </div>
                </a>
                <div class="dashboard-card-base">
                  <a href="#"><i class="fa-regular fa-pen-to-square"></i></a>
                  <a href="#"><i class="fa-solid fa-bullhorn"></i></a>
                  <a href="#"><i class="fa-regular fa-comments"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export default Dashboard;