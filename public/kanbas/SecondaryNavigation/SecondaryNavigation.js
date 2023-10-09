function SecondaryNavigation(active, page, mobile) {
  const courses_links = [
      { text: "Home", url: "/Kanbas/Courses/Home/home.html", icon: "fa-solid fa-house" },
      { text: "Modules", url: "#", icon: "fa-solid fa-circle-nodes" },
      { text: "Piazza", url: "#", icon: "fa-solid fa-plug" },
      { text: "Zoom Meetings", url: "#", icon: "fa-solid fa-plug" },
      { text: "Assignments", url: "/Kanbas/Courses/Assignments/index.html", icon: "fa-solid fa-pencil" },
      { text: "Quizzes", url: "#", icon: "fa-solid fa-rocket" },
      { text: "Grades", url: "/Kanbas/Courses/Grades/index.html", icon: "fa-solid fa-book" },
      { text: "People", url: "#", icon: "fa-solid fa-user-group"},
      { text: "Panopto Video", url: "#", icon: "fa-solid fa-plug"},
      { text: "Discussions", url: "#", icon: "fa-regular fa-comments"},
      { text: "Announcements", url: "#", icon: "fa-solid fa-bullhorn"},
      { text: "Pages", url: "#", icon: "fa-regular fa-file-lines"},
      { text: "Files", url: "#", icon: "fa-regular fa-folder"},
      { text: "Rubrics", url: "#", icon: "fa-solid fa-clipboard-list"},
      { text: "Outcomes", url: "#", icon: "fa-regular fa-bullseye"},
      { text: "Collaborations", url: "#", icon: "fa-regular fa-circle"},
      { text: "Syllabus", url: "#", icon: "fa-solid fa-list-ul"},
      { text: "Progress Reports (EAB Navigate)", url: "#", icon: "fa-solid fa-plug"},
      { text: "Settings", url: "#", icon: "fa-solid fa-gear"},
    ];
    const account_links = [
          { text: "Notifications", url: "#" },
          { text: "Profile", url: "/Kanbas/Account/Profile/index.html" },
          { text: "Files", url: "#" },
          { text: "Settings", url: "#" },
          { text: "ePortfolios", url: "#" },
          { text: "Shared Content", url: "#" },
          { text: "The Hub", url: "#" },
          { text: "Qwickly Course Tools", url: "#"},
          { text: "Global Announcements", url: "#"},
        ];
    var links;
    page == "courses" ? links = courses_links : links = account_links;
    if (mobile) {
      return `<ul class="mobile-secondary-nav list-group">${links.map((link) => `<li class="list-group-item ${active === link.text ? "active" : ""}"">
      <a href="${link.url}" class="secondary-navigation-link "><i class="${link.icon}" id="${link.text}"></i>${link?.text}</a></li>`).join("")}</ul>`;
    }
    return `<ul class="secondary-navigation list-group">${links.map((link) => `<li class="list-group-item ${active === link.text ? "active" : ""}"">
    <a href="${link.url}" class="secondary-navigation-link ">${link?.text}</a></li>`).join("")}</ul>`;}

export default SecondaryNavigation;
