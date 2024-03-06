import { useLocation, useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();

  const {
    state: { uuid },
  } = useLocation();

  console.log(uuid, "uuid");

  console.log(userId);

  return <p>User{userId}</p>;
}

export default User;
