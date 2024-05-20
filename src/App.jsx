import css from "../src/App.module.css";

import { useEffect, useState } from "react";
import getRespAPI from "./photos-api.js";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [isPhotos, setIsPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    async function getPhotos() {
      try {
        const photos = await getRespAPI(searchQuery);
        setIsPhotos(photos);
      } catch {
      } finally {
      }
    }
    getPhotos();
  }, [searchQuery]);

  async function hadleSearch(topic) {
    setSearchQuery(topic);
  }

  return (
    <div>
      <SearchBar onSearch={hadleSearch} />
      {isPhotos.length > 0 && <ImageGallery data={isPhotos} />}
    </div>
  );
}

export default App;
