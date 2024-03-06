import { useLocation, useOutletContext } from "react-router-dom";

function Home() {
  const location = useLocation();

  console.log(location.pathname);

  const [myState, setMyState] = useOutletContext();

  console.log(myState);

  return (
    <div className="text-center">
      <h1
        className="my-h1 my-text-2"
        onClick={() => {
          setMyState("首頁");
        }}
      >
        {myState}
        Home
      </h1>
    </div>
  );
}

export default Home;
