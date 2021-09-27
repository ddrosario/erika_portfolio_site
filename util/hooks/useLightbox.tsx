import React, { useState } from 'react';
import Lightbox from '@components/Lightbox';

const useLightbox = (): [JSX.Element | null, Function] => {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const closeLightbox = () => {
    setImgUrl(null);
  };

  const openLightbox = (img: string) => {
    setImgUrl(img);
  };

  if (imgUrl) {
    return [<Lightbox imgUrl={imgUrl} handleCloseLightbox={closeLightbox} />, openLightbox];
  }

  return [null, openLightbox];
};

export default useLightbox;
