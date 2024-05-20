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
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [totalPages, setTotalPages] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function getPhotos() {
      try {
        setIsError(false);
        setIsLoader(true);
        const resp = await getRespAPI(searchQuery, page);
        setTotalPages(page < Math.ceil(resp.total_pages / 20));
        console.log(totalPages);
        const res = await resp;
        const photos = res.results;
        setPhotos((prevState) => [...prevState, ...photos]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getPhotos();
  }, [searchQuery, page]);

  async function hadleSearch(topic) {
    setSearchQuery(topic);
    setPage(1);
    setPhotos([]);
  }

  async function handleMoreBtn() {
    setPage((prevState) => prevState + 1);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function handleSelectPhoto(photo) {
    setSelectedImg(photo);
    openModal();
  }

  return (
    <div>
      <SearchBar onSearch={hadleSearch} />
      {isError && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery data={photos} handleSelectPhoto={handleSelectPhoto} />
      )}
      {isLoader && <Loader />}
      {totalPages && <LoadMoreBtn clickMore={handleMoreBtn} />}
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
