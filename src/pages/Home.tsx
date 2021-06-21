import React from 'react';
import allBeers from '../assets/img/christin.svg';
import { Link } from 'react-router-dom';

const HomeComponent: React.FC = () => {
  return (
    <div className='home-component'>
      <img src={allBeers} alt='christin' />
      <Link to='/allbeers'>All Beers</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
        eleifend vitae varius venenatis.{' '}
      </p>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className='home'>
      <HomeComponent />
    </div>
  );
};

export default Home;
