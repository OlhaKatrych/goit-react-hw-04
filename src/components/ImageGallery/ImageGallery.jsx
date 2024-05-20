import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ data }) {
  console.log(data);
  return (
    <ul className={css.list}>
      {data.map((item) => {
        console.log(item);
        return (
          <li className={css.item} key={item.id}> 
            <ImageCard item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
