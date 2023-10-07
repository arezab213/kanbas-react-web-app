import SecondaryNavigation from "../../SecondaryNavigation/SecondaryNavigation.js"
import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js"

function Profile() {
  return `
    <div class="flex-row-container">
      <div class="kanbas-navigation">
        <div class="logo-container">
          <img class="logo-mark" src="../../../images/nu_logo.png" alt="..."/>
        </div>
        <div>
          ${KanbasNavigation("Account")}
        </div>
      </div>
      <div class="main-content-wrapper">
        <div class="header-bar">
          <i class="fa-solid fa-bars" id="menu-button"></i>
            <div class="breadcrumb-wrapper">
              <nav id="breadcrumbs">
                <ul class="breadcrumbs list-group">
                  <li class="list-group-item">
                    Rick Rubin&apos;s Profile
                  </li>
                </ul>
              </nav>
            </div>
        </div>
        <div class="below-header-content">
          <div class="secondary-navigation">
            <div class="sn-list-container">
              ${SecondaryNavigation("Profile", "account")}
            </div>
          </div>
          <div class="acc-main-container">
            <div class="acc-main-content">
              <div class="acc-profile-layout-primary">
                <div class="acc-profile-logo-wrapper">
                  <i class="fa-solid fa-user" id="profile-logo"></i>
                </div>
                <div class="name-fields">
                  <h6 id="input-header">Name:*</h6>
                  <input class="form-control profile-text-input" type="text" value="Rick Rubin">
                  <h6 id="input-header">Pronouns:</h6>
                  <select class="profile-dropdown"><option>None</option></select>
                  <h6 id="input-header">Title:</h6>
                  <input class="form-control profile-text-input" type="text">
                </div>
                <div class="profile-section">
                  <h3 id="profile-header">Contact</h2>
                  <p>No registered services, you can add some on the <a href="#">settings</a> page.</p>
                </div>
                <div class="profile-section">
                  <h3 id="profile-header">Biography</h2>
                  <textarea class="form-control profile-text-area">Rick Rubin, American record producer whose light touch and keen ear made him one of the most sought-after producers in popular music.</textarea>
                </div>
                <div class="profile-section">
                  <h3 id="profile-header">Links</h2>
                  <div class="row">
                    <div class="col col-lg" id="links-header-container"><h6 id="input-header">Title</h6></div>
                    <div class="col" id="links-icon-container"></div>
                    <div class="col col-lg" id="links-header-container"><h6 id="input-header">URL</h6></div>
                  </div>
                  <div class="row">
                    <div class="col col-lg"><input class="form-control profile-text-input" type="text" value="YouTube"></div>
                    <div class="col" id="links-icon-container"><i class="fa-solid fa-arrow-right"></i></div>
                    <div class="col col-lg"><input class="form-control profile-text-input" type="text" value="https://www.youtube.com/@WebDevTV"></div>
                    <div class="col" id="links-icon-container"><i class="fa-solid fa-xmark" id="remove-link-icon"></i></div>
                  </div>
                  <button type="button" class="btn btn-primary" id="profile-add-link-btn">Add Another Link</button>
                </div>
                <div class="edit-profile-final-btn-row">
                  <a href="/Kanbas/Account/Profile/index.html"><button type="button" class="btn btn-primary">Cancel</button></a>
                  <a href="/Kanbas/Account/Profile/index.html"><button type="button" class="btn btn-primary" id="profile-save-btn">Save Profile</button></a>
                </div>
              </div>
              <div class="acc-profile-layout-secondary">
                <a href="/Kanbas/Account/Profile/index.html">
                <button type="button" class="btn btn-primary"><i class="fa-solid fa-pencil fa-flip-horizontal" id="edit-button-icon"></i>Cancel Editing</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export default Profile;