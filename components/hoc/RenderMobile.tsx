import { useMediaQuery } from 'react-responsive';

const RenderMobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export default RenderMobile;
