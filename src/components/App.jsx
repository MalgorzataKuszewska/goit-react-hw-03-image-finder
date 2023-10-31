import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

const API_KEY = '40392219-f1d62b1248a0a5a357f21115b';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

export function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleImageClick = imageUrl => {
    setModalImage(imageUrl);
  };

  const handleModalClose = () => {
    setModalImage('');
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);

    axios
      .get(BASE_URL, {
        params: {
          key: API_KEY,
          q: query,
          page,
          per_page: PER_PAGE,
          image_type: 'photo',
          orientation: 'horizontal',
        },
      })
      .then(response => {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  return (
    <div
      className="app"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={loadMore} />}
      {modalImage && <Modal imageUrl={modalImage} onClose={handleModalClose} />}
    </div>
  );
}
