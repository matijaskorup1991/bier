import React from 'react';
import allBeers from '../assets/img/christin.svg';
import proriat from '../assets/img/proriat.svg';
import { Link } from 'react-router-dom';
import './Home.scss';

interface Data {
  linkTo: string;
  linkText: string;
  imgSrc: string;
  text: string;
}

const HomeComponent: React.FC<Data> = ({ imgSrc, linkTo, linkText, text }) => {
  return (
    <div className='home-component'>
      <img src={imgSrc} alt='christin' />
      <Link to={linkTo}>{linkText}</Link>
      <p>{text}</p>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className='home'>
      <HomeComponent
        imgSrc={allBeers}
        linkTo='/allbeers'
        linkText='All Beers'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. '
      />
      <HomeComponent
        imgSrc={proriat}
        linkTo='/randombeer'
        linkText='Random Beer'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. '
      />
      {/* <HomeComponent /> */}
    </div>
  );
};

export default Home;
