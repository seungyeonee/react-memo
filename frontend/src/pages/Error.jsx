import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="contents">
      없는 페이지입니다.
      <br />
      <Link to={"/"}>메인으로 돌아가기</Link>
    </div>
  );
};

export default ErrorPage;
