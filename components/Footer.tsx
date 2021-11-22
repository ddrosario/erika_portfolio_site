/* eslint-disable @next/next/no-img-element */
import React from 'react';

import ContactMe from './ContactMe';

const Footer = ({ text }: { text?: string }) => (
  <footer id="footer">
    <ContactMe text={text} />
    <div className="footer" />
  </footer>
);

Footer.defaultProps = {
  text: undefined,
};

export default Footer;
