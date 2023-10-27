import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const CommonLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <Header pathname={pathname} title={"React Memo"} />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default CommonLayout;
