import { useLocation, useNavigate } from "react-router-dom";
import { Article } from "../../components/Article";

const ArticlePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state)
  return (
    <div className="contents">
      <Article title={state.title} body={state.body} />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        목록으로
      </button>
    </div>
  );
};

export default ArticlePage;
