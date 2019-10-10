import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ text }) => {
  return (
    <footer className="footer">
      <div className="container">
        <span>{text}</span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  text: PropTypes.string.isRequired
};

export default Footer;
