import React, { useState } from 'react';

interface IProps {
  preloader: string;
  img: string;
}

const ImgWithPreload: React.FC<IProps> = ({ preloader, img }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const bg = new Image();
  bg.src = img;
  bg.onload = () => {
    setIsLoaded(true);
  };

  return isLoaded ? <img src={img} alt="img" /> : <img src={preloader} alt="img" />;
};

export default ImgWithPreload;
