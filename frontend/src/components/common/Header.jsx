import { Link } from "react-router-dom";
import HeaderStyle from "./Header.module.css";

const Header = () => {
  return (
    <header className={HeaderStyle['header']}>
      <h1>
        <Link
          to={"/"}
        >
          React-crud
        </Link>
      </h1>
    </header>
  );
};

export default Header;
