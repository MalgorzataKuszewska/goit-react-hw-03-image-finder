import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button className="load-more" onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;
