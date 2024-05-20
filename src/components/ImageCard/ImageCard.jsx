import css from "./ImageCard.module.css";

function ImageCard({item}) {
    console.log(item)
  return <div className={css.container}>
     <img className={css.pic} src={item.urls.small} alt={item.alt_description} />
  </div>;
}

export default ImageCard;
