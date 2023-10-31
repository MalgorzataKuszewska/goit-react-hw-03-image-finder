import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="image-gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </div>
  );
};

export default ImageGallery;
