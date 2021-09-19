import { useMediaQuery } from 'react-responsive';

const RenderDefault = ({ children }: any) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export default RenderDefault;
