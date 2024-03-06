import { Link, Outlet } from "react-router-dom";

function Users() {
  return (
    <div className="text-center">
      <h1 className="my-h1 my-text-2">Users</h1>
      <Link to="1" state={{ uuid: "aaba1" }}>
        user1
      </Link>
      <Link to="2" state={{ uuid: "aaba2" }}>
        user2
      </Link>
      <Link to="3" state={{ uuid: "aaba3" }}>
        user3
      </Link>
      <Outlet />
    </div>
  );
}

export default Users;
