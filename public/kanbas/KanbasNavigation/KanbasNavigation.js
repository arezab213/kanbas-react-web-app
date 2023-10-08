function KanbasNavigation(active) {
  const links = [
    { text: "Account", url: "/Kanbas/Account/Profile/index.html", icon: "fa-regular fa-circle-user" },
    { text: "Dashboard", url: "/Kanbas/Dashboard/index.html", icon: "fa-solid fa-gauge-high"  },
    { text: "Courses", url: "/Kanbas/Courses/Home/home.html", icon: "fa-solid fa-book"  },
    { text: "Calendar", url: "#", icon: "fa-solid fa-calendar-days"  },
    { text: "Inbox", url: "#", icon: "fa-solid fa-inbox"  },
    { text: "History", url: "#", icon: "fa-regular fa-clock"  },
    { text: "Studio", url: "#", icon: "fa-solid fa-computer"  },
    { text: "Commons", url: "#", icon: "fa-solid fa-right-from-bracket"  },
    { text: "Help", url: "#", icon: "fa-regular fa-circle-question"  }
  ];
  return `
<ul class="kn list-group">
  ${links
    .map(
      (link) => `
    <li class="list-group-item${active === link.text ? " active" : ""}"">

      <a href="${link.url}" class="kanbas-navigation-link">
        <i class="${link.icon}" id="${link.text}"> </i>
        ${link.text}
      </a>
    </li>
  `
    )
    .join("")}
</ul>
`;
}

export default KanbasNavigation;
