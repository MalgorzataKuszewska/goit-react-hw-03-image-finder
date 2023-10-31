import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <div className="image-gallery-item">
      <img
        src={image.webformatURL}
        alt={`${image.id}`}
        onClick={() => onClick(image.largeImageURL)}
      />
    </div>
  );
};

export default ImageGalleryItem;
