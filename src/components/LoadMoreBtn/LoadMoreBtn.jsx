import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({clickMore}) {
  return (
    <div>
      <button className={css.btn} type="button" onClick={clickMore}>Load more</button>
    </div>
  );
}

export default LoadMoreBtn;
