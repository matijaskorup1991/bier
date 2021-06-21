import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import footer from '../assets/img/Logo.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <Link to='/'>
        <img src={footer} alt='foter' />
      </Link>
    </footer>
  );
};

export default Footer;
