import SecondaryNavigation from "../../SecondaryNavigation/SecondaryNavigation.js"
import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js"

function AssignmentEdit() {
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
                  <a href="/Kanbas/Courses/Assignments/index.html">Assignments</a>
                </li>
                <li class="list-group-item">
                  <i class="fa-solid fa-chevron-right" id="subsection-arrow"></i>
                  A# - Assignment Name
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
            <div>A# - Assignment Name</div>
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
            <div class="secondary-header-bar edit-page">
              <div class="btns-row">
                <button type="button" class="btn btn-primary ellipses"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                <div class="btn-row-publish-status">
                  <i class="fa-solid fa-circle-check"></i>
                  Published
                </div>
              </div>
            </div>
            <div class="assignment-edit-form">
              <div class="edit-form-section">
                <label for="assignment-name" class="form-label above-label">Assignment Name</label>
                <input class="form-control assignment-edit-input" type="text" value="A# - Assignment Name" id="assignment-name">
              </div>
              <div class="edit-form-section">
                <textarea class="form-control assignment-edit-text-area">This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository and then deploying the content to a remote server hosted on Netlify.</textarea>
              </div>
              <div class="edit-form-section extra-margin">
                <label for="points-input" class="form-label">Points</label>
                <input class="form-control assignment-edit-input" type="text" value="100" id="points-input">
              </div>
              <div class="edit-form-section extra-margin">
                <label for="assignment-group-dropdown" class="form-label">Assignment Group</label>
                <select class="form-select assignment-edit-dropdown" id="assignment-group-dropdown"><option>ASSIGNMENTS</option></select>
              </div>
              <div class="edit-form-section extra-margin">
                <label for="assignment-grade-dropdown" class="form-label">Display Grade as</label>
                <select class="form-select assignment-edit-dropdown" id="assignment-grade-dropdown"><option>Percentage</option></select>
              </div>
              <div class="edit-form-section extra-margin">
                <label class="form-label"></label>
                <div class="form-check assignment-edit-checkbox">
                  <input class="form-check-input" type="checkbox" value="" id="countTowardFinalGrade">
                  <label class="form-check-label" for="countTowardFinalGrade">
                    Do not count this assignment towards the final grade
                  </label>
                </div>
              </div>
              <div class="edit-form-section extra-margin">
                <label for="assignment-submission-type" class="form-label" id="input-group-label">Submission Type</label>
                <div class="assignment-edit-input-group">
                  <div class="edit-form-section">
                    <select class="form-select assignment-edit-dropdown" id="assignment-submission-type"><option>Online</option></select>
                  </div>
                  <div class="edit-form-section">
                    <label class="form-label">Online Entry Options</label>
                  </div>
                  <div class="edit-form-section">
                    <div class="form-check assignment-edit-checkbox">
                      <input class="form-check-input" type="checkbox" value="" id="textEntry">
                      <label class="form-check-label" for="textEntry">
                        Text Entry
                      </label>
                    </div>
                  </div>
                  <div class="edit-form-section">
                    <div class="form-check assignment-edit-checkbox">
                      <input class="form-check-input" type="checkbox" value="" id="websiteURL">
                      <label class="form-check-label" for="websiteURL">
                        Website URL
                      </label>
                    </div>
                  </div>
                  <div class="edit-form-section">
                    <div class="form-check assignment-edit-checkbox">
                      <input class="form-check-input" type="checkbox" value="" id="mediaRecordings">
                      <label class="form-check-label" for="mediaRecordings">
                        Media Recordings
                      </label>
                    </div>
                  </div>
                  <div class="edit-form-section">
                    <div class="form-check assignment-edit-checkbox">
                      <input class="form-check-input" type="checkbox" value="" id="studentAnnotation">
                      <label class="form-check-label" for="studentAnnotation">
                        Student Annotation
                      </label>
                    </div>
                  </div>
                  <div class="edit-form-section">
                    <div class="form-check assignment-edit-checkbox">
                      <input class="form-check-input" type="checkbox" value="" id="fileUploads">
                      <label class="form-check-label" for="fileUploads">
                        File Uploads
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="edit-form-section extra-margin last">
                <label for="assignment-submission-type" class="form-label" id="input-group-label">Assign</label>
                <div class="assignment-edit-input-group">
                  <div class="edit-form-section">
                    <label class="form-label above-label" for="assign_to">Assign to</label>
                    <select class="form-select assignment-edit-dropdown" id="assignment-submission-type" id="assign_to"><option>Everyone</option></select>
                  </div>
                  <div class="edit-form-section">
                    <label class="form-label above-label" for="due_date">Due</label>
                    <input class="form-control assignment-edit-input" type="date" value="2023-09-18" id="due_date">
                  </div>
                  <div class="d-flex flex-row">
                    <div class="flex-grow-1 edit-form-section">
                      <label class="form-label above-label" for="avl_from">Available from</label>
                      <input class="form-control assignment-edit-input" type="date" id="avl_from">
                    </div>
                    <div class="flex-grow-1 edit-form-section">
                      <label class="form-label above-label" for="avl_until">Until</label>
                      <input class="form-control assignment-edit-input" type="date" id="avl_until">
                    </div>
                  </div>
                </div>
              </div>
              <div class="edit-form-section extra-margin">
                <label class="form-label"></label>
                <button type="button" class="btn btn-primary" id="add-assign-btn"><i class="fa-solid fa-plus"></i>Add</button>
              </div>
            </div>
            <div class="edit-form-end-btn-row">
              <div class="form-check assignment-edit-checkbox">
                <input class="form-check-input" type="checkbox" value="" id="notifyUsersOption">
                <label class="form-check-label" for="notifyUsersOption">
                  Notify users that this content has changed
                </label>
              </div>
              <a href="/Kanbas/Courses/Assignments/index.html">
                <button type="button" class="btn btn-primary">Cancel</button>
              </a>
              <a href="/Kanbas/Courses/Assignments/index.html">
                <button type="button" class="btn btn-secondary"></i>Save</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export default AssignmentEdit;
