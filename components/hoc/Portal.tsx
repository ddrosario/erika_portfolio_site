import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  id: string;
  children: JSX.Element | JSX.Element[];
}

function createRootElement(id: string) {
  const rootContainer = document?.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addElementToBody(element: HTMLDivElement) {
  document?.body.insertBefore(
    element,
    document?.body?.lastElementChild?.nextElementSibling || null,
  );
}

export function usePortal(id: string) {
  const portalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check DOM for target element
    const existingParent = document?.querySelector<HTMLDivElement>(`#${id}`);

    const parentElem = existingParent || createRootElement(id);

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addElementToBody(parentElem);
    }

    // Attach the root element to the parent node
    if (portalRef.current !== null) {
      parentElem.appendChild(portalRef.current);
    }

    return function removeElement() {
      portalRef.current?.remove();
      if (!parentElem.childElementCount) {
        parentElem.remove();
      }
    };
  }, [id]);

  function getRootElem() {
    if (!portalRef.current) {
      portalRef.current = document?.createElement('div');
    }
    return portalRef.current;
  }

  if (typeof window === 'undefined') return null;

  return getRootElem();
}

const Portal = ({ id, children }: PortalProps) => {
  const parentElement = usePortal(id);
  if (typeof window === 'undefined' || parentElement === null) return null;

  return ReactDOM.createPortal(
    children,
    parentElement,
  );
};

export default Portal;
