import { useEffect } from 'react';

export const usePreventBodyScroll = (disable = false) => {
  useEffect(() => {
    const body = document.getElementsByTagName('body')?.[0];

    body.classList.add('modal-open');
    if (disable) {
      body.classList.remove('modal-open');
    }

    return () => body.classList.remove('modal-open');
  }, []);
};
