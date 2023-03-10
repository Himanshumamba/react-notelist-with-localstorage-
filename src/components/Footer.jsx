import React from 'react';

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <p>
        Copyright {today.getFullYear()} You have Items :{length}
        {length === 1 || 0 ? 'item' : 'items'}
      </p>
    </footer>
  );
};

export default Footer;
