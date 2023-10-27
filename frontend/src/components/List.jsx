import { Link } from "react-router-dom";
import ListStyle from "./List.module.scss";

export const List = ({ data }) => {
  return (
    <ul className={ListStyle["list"]}>
      {data.map((item) => (
        <li key={item.id}>
          <Link to={`/article/${item.id}`} state={{ id: item.id, title: item.title, body: item.body }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
