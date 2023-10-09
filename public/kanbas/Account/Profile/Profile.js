import SecondaryNavigation from "../../SecondaryNavigation/SecondaryNavigation.js"
import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js"

function Profile() {
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
        ${KanbasNavigation("Account", true)}
      </div>
    </div>
    <div class="flex-row-container">
      <div class="d-none d-md-flex kanbas-navigation">
        <div class="logo-container">
          <img class="logo-mark" src="../../../images/nu_logo.png" alt="..."/>
        </div>
        <div>
          ${KanbasNavigation("Account", false)}
        </div>
      </div>
      <div class="main-content-wrapper">
        <div class="d-none d-md-flex header-bar">
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
        <div class="d-xs-flex d-sm-flex d-md-none mobile-header-bar">
          <a class="mobile-header-bar-icon-container" data-bs-toggle="collapse" href="#collapseKN" role="button">
            <i class="fa-solid fa-bars"></i>
          </a>
          <a class="mobile-header-title" data-bs-toggle="collapse" href="#collapseSN" role="button">
            <div>Rick Rubin&apos;s Profile</div>
          </a>
          <a class="mobile-header-bar-icon-container icon-toggle" data-bs-toggle="collapse" aria-expanded="false" href="#collapseSN" role="button">
            <i class="fa-solid fa-chevron-down" id="chevron-down"></i>
            <i class="fa-solid fa-xmark" id="xmark"></i>
          </a>
        </div>
        <div class="collapse" id="collapseSN">
          <div class="d-xs-block d-sm-block d-md-none mobile-secondary-nav">
            ${SecondaryNavigation("Profile", "account", true)}
          </div>
        </div>
        <div class="below-header-content">
          <div class="d-none d-md-block secondary-navigation">
            <div class="sn-list-container">
              ${SecondaryNavigation("Profile", "account", false)}
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
                  <a href="/Kanbas/Account/Profile/index.html"><button type="button" class="btn btn-secondary">Save Profile</button></a>
                </div>
              </div>
              <div class="d-none d-md-block acc-profile-layout-secondary">
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