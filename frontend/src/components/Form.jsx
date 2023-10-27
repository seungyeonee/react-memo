import Icon from "../assets/icons/IconList";
import FormStyle from "./Form.module.scss";

const Form = () => {
  return (
    <form className={FormStyle["form"]}>
      <fieldset>
        <label>제목</label>
        <input />
        <label>내용</label>
        <input />
        <div>
          <button>작성 <Icon name="write" /></button>
          <button>수정 <Icon name="edit" /></button>
          <button>삭제</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
