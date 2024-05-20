import css from "../src/App.module.css";

import { useEffect, useState } from "react";
import getRespAPI from "./photos-api.js";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [isPhotos, setIsPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [isPage, setIsPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function getPhotos() {
      try {
        setIsError(false);
        setIsLoader(true);
        const photos = await getRespAPI(searchQuery, isPage);
        setIsPhotos((prevState) => [...prevState, ...photos]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getPhotos();
  }, [searchQuery, isPage]);

  async function hadleSearch(topic) {
    setSearchQuery(topic);
    setIsPage(1);
    setIsPhotos([]);
  }

  const total_pages = isPage >= 1000;

  async function handleMoreBtn() {
    setIsPage((prevState) => prevState + 1);
    setShowBtn(total_pages && total_pages !== isPage);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function handleSelectPhoto (photo)  {
    setSelectedImg(photo);
    openModal();
  };

  return (
    <div>
      <SearchBar onSearch={hadleSearch} />
      {isError && <ErrorMessage />}
      {isPhotos.length > 0 && <ImageGallery data={isPhotos} handleSelectPhoto={handleSelectPhoto} />}
      {isLoader && <Loader />}
      {isPhotos.length > 0 && <LoadMoreBtn clickMore={handleMoreBtn} />}
      {showBtn && <LoadMoreBtn />}
      {selectedImg !== null && (
        <ImageModal
          selectedImg={selectedImg}
          modalIsOpen={modalIsOpen}
          onIsCloseModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
