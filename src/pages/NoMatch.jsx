import { useEffect, useState } from "react";
import { Navigate, useHref } from "react-router-dom";

function NoMatch() {
  const [isNoMatch, setIsNoMatch] = useState(false);

  const href = useHref();
  console.log(href);

  useEffect(() => {
    setTimeout(() => {
      setIsNoMatch(true);
    }, 3000);
  }, []);

  return !isNoMatch ? (
    <p>查無此頁，1秒後跳轉回首頁</p>
  ) : (
    <Navigate to="/" replace={true} />
  );
}

export default NoMatch;
