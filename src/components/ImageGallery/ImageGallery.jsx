import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ data, handleSelectPhoto }) {
  return (
    <ul className={css.list}>
      {data.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <ImageCard item={item} handleSelectPhoto={handleSelectPhoto}/>
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
