import PaginationStyle from "./Pagination.module.scss";

const Pagination = ({ dataLength, perPage, active}) => {
  return (
    <ul className={PaginationStyle["pagination"]}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  );
};

export default Pagination;
