import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MyLink({ path }) {
  return <Link to={path}>{path}</Link>;
}

export default MyLink;
