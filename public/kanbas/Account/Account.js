import SecondaryNavigation from "../../kanbas/SecondaryNavigation/SecondaryNavigation.js"
import KanbasNavigation from "../../kanbas/KanbasNavigation/KanbasNavigation.js"

function Account() {
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
        ${KanbasNavigation("Account", false)}
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
                <h2 id="profile-name">Rick Rubin</h2>
                <div class="profile-section">
                  <h3 id="profile-header">Contact</h2>
                  <p>No registered services, you can add some on the <a href="#">settings</a> page.</p>
                </div>
                <div class="profile-section">
                  <h3 id="profile-header">Biography</h2>
                  <p>Rick Rubin, American record producer whose light touch and keen ear made him one of the most sought-after producers in popular music.</p>
                </div>
                <div class="profile-section">
                  <h3 id="profile-header">Links</h2>
                  <p><i class="fa-solid fa-link" id="link-logo"></i><a href="https://www.youtube.com/@WebDevTV">YouTube<i class="fa-solid fa-up-right-from-square" id="external-link-icon"></i></a></p>
                </div>
              </div>
              <div class="acc-profile-layout-secondary">
                <a href="/Kanbas/Account/Profile/edit.html"><button type="button" class="btn btn-primary"><i class="fa-solid fa-pencil fa-flip-horizontal" id="edit-button-icon"></i>Edit Profile</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
}

export default Account;
