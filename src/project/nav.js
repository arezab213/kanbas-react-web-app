import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
  const screens = ["signin", "signup", "account", "admin/users"];
  return (
      <div className="list-group">
        {screens.map((screen) => (
            <Link
                key={screen}
                to={`/project/${screen}`}
                className="list-group-item"
            >
              {screen}
            </Link>
        ))}
      </div>
  );
}

export default Navigation;