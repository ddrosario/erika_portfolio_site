import { useEffect } from 'react';

export default function useRefClickListener(
  ref: React.MutableRefObject<any>,
  callback: Function,
  dependency: any = true,
) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
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
}
