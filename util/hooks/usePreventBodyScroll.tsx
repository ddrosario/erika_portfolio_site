import { useEffect } from 'react';

export const usePreventBodyScroll = () => {
  useEffect(() => {
    const body = document.getElementsByTagName('body')?.[0];

    body.classList.add('modal-open');

    return () => body.classList.remove('modal-open');
  }, []);
};
