import Form from "../components/Form";
import { List } from "../components/List";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:50/posts")
      .then((res) => res.text())
      .then((data) => setData(JSON.parse(data)))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("data : ", data);
  }, [data]);
  return (
    <div className="contents">
      {!data ? <p>로딩중..</p> : <List data={data} />}
      <Pagination dataLength={data && data.length} perPage={1} active={1}/>
      <hr />
      <Form />
    </div>
  );
};

export default MainPage;
