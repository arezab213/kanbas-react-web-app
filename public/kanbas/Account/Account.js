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
                  <a href="#">Main Section</a>
                </li>
                <li class="list-group-item">
                  <i class="fa-solid fa-chevron-right" id="subsection-arrow"></i>
                  Subsection
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="secondary-navigation">
          <div class="sn-list-container">
            ${SecondaryNavigation("Profile", "account")}
          <div>
        </div>
      </div>
    </div>
`;
}

export default Account;