import css from "./ImageCard.module.css";

function ImageCard({ item, handleSelectPhoto }) {
  return (
    <div className={css.container}>
      <img
        className={css.pic}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => {handleSelectPhoto(item)}}
      />
    </div>
  );
}

export default ImageCard;
