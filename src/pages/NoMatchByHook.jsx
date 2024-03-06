import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NoMatchByHook() {
  const navigator = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigator("/");
    }, 3000);
  }, []);

  return <p>查無此頁，1秒後跳轉回首頁</p>;
}

export default NoMatchByHook;
