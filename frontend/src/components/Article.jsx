export const Article = ({ title, body }) => {
  return (
    <article>
      <h2>{title ?? '게시글 제목'}</h2>
      <hr/>
      <p>{body ?? '게시글 내용'}</p>
    </article>
  );
}
