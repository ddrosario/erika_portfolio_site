import { useState, useEffect, useRef } from 'react';

interface IntersectOptions {
  threshold?: number;
  root?: null | HTMLElement;
  rootMargin?: string;
  triggerOnce?: boolean;
}

function useIntersect<ElementType extends HTMLElement>(options: IntersectOptions) {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [wasIntersecting, setWasIntersecting] = useState<boolean>(false);
  const ref = useRef<ElementType>(null);
  const {
    threshold,
    root,
    rootMargin,
    triggerOnce,
  } = options;

  useEffect(() => {
    if (ref.current && typeof window.IntersectionObserver === 'function') {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIsIntersecting(entries[0].isIntersecting);
      };
      const observer = new window.IntersectionObserver(handler, { threshold, root, rootMargin });
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
    return () => {};
  }, [root, rootMargin, threshold]);

  useEffect(() => {
    if (wasIntersecting === false && isIntersecting === true && triggerOnce) {
      setWasIntersecting(true);
    }
  }, [isIntersecting, triggerOnce, wasIntersecting]);

  if (triggerOnce) {
    return [ref, wasIntersecting] as const;
  }

  return [ref, isIntersecting] as const;
}

export default useIntersect;
