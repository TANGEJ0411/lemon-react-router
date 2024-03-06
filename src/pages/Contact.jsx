import { useLocation, useOutletContext } from "react-router-dom";

function Contact() {
  const location = useLocation();

  console.log(location.pathname);

  console.log(location.search);

  const [myState, setMyState] = useOutletContext();
  return (
    <div className="text-center">
      <h1 className="my-h1 my-text-2">{myState}contact</h1>
    </div>
  );
}

export default Contact;
