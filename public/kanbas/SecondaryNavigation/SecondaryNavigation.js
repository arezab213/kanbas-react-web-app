function SecondaryNavigation(active, page) {

  const courses_links = [
      { text: "Home", url: "/Kanbas/Courses/Home/home.html" },
      { text: "Modules", url: "#" },
      { text: "Piazza", url: "#" },
      { text: "Zoom Meetings", url: "#" },
      { text: "Assignments", url: "/Kanbas/Courses/Assignments/index.html" },
      { text: "Quizzes", url: "#" },
      { text: "Grades", url: "/Kanbas/Courses/Grades/index.html" },
      { text: "People", url: "#"},
      { text: "Panopto Video", url: "#"},
      { text: "Discussions", url: "#"},
      { text: "Announcements", url: "#"},
      { text: "Pages", url: "#"},
      { text: "Files", url: "#"},
      { text: "Rubrics", url: "#"},
      { text: "Outcomes", url: "#"},
      { text: "Collaborations", url: "#"},
      { text: "Syllabus", url: "#"},
      { text: "Settings", url: "#"},
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
  return `
<ul class="secondary-navigation list-group">
  ${links
    .map(
      (link) => `
    <li class="list-group-item ${active === link.text ? "active" : ""}">
      <a href="${link.url}" class="secondary-navigation-link ">${link?.text}</a>
    </li>
  `
    )
    .join("")}
</ul>
`;
}

export default SecondaryNavigation;
