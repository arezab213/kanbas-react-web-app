import SecondaryNavigation from "../../kanbas/SecondaryNavigation/SecondaryNavigation.js"
import KanbasNavigation from "../../kanbas/KanbasNavigation/KanbasNavigation.js"

function Account() {
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
              <a href="/Kanbas/Account/Profile/edit.html">
              <button type="button" class="btn btn-primary"><i class="fa-solid fa-pencil fa-flip-horizontal" id="edit-button-icon"></i>Edit Profile</button>
              </a>
              </div>

          </div>
        </div>
        </div>
      </div>
    </div>
`;
}

export default Account;