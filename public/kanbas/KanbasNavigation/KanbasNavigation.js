function KanbasNavigation(active) {
  const links = [
    { text: "Account", url: "/Kanbas/Account/Profile/index.html" },
    { text: "Dashboard", url: "#" },
    { text: "Courses", url: "/Kanbas/Courses/Home/home.html" },
    { text: "Calendar", url: "#" },
    { text: "Inbox", url: "#" },
    { text: "History", url: "#" },
    { text: "Studio", url: "#" },
    { text: "Commons", url: "#" },
    { text: "Help", url: "#" }
  ];
  return `
<ul class="kanbas-navigation list-group">
  ${links
    .map(
      (link) => `
    <li class="list-group-item ${active === link.text ? "active" : ""}">
      <a href="${link.url}" class="kanbas-navigation-link ">${link.text}</a>
    </li>
  `
    )
    .join("")}
</ul>
`;
}

export default KanbasNavigation;
