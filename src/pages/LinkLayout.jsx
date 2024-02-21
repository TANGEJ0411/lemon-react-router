import { NavLink } from "react-router-dom";

function LinkLayout() {
  const routeArray = ["/", "/about", "/contact", "/product"];

  return (
    <div>
      {routeArray.map((path) => {
        let pathName;
        switch (path) {
          case "/":
            pathName = "Home";
            break;
          case "/about":
            pathName = "About";
            break;
          case "/contact":
            pathName = "Contact";
            break;
          case "/product":
            pathName = "Product";
            break;
          default:
            pathName = "Home";
            break;
        }
        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => {
              const normal = "my-mx-2 my-t2";
              return isActive
                ? `my-primary-2 ${normal}`
                : `my-primary-1 ${normal}`;
            }}
          >
            {pathName}
          </NavLink>
        );
      })}
    </div>
  );
}

export default LinkLayout;
