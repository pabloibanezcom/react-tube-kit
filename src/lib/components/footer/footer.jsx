import React from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import componentData from './footer.data.json';

const Footer = ({ className, text }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="container">
        <span>{text}</span>
      </div>
    </footer>
  );
};

Object.assign(Footer, generateComponentProps(componentData));

export default Footer;
