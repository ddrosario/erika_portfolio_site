import React, { useEffect, useRef } from 'react';

export default function useRefClickListener<Type extends HTMLElement>(
  callback: Function,
  dependency: any = true,
):React.RefObject<Type> {
  const ref = useRef<Type>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent | any) {
      if (ref.current && !ref.current.contains(event.target) && dependency) {
        callback(event);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback, dependency]);

  return ref;
}
