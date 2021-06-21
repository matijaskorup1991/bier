import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [beer, setBeer] = useState<any>(null);

  useEffect(() => {
    async function getBeer() {
      try {
        let { data } = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );

        let filteredData = data.map((el: any) => el._id);
        setBeer(filteredData);
      } catch (error) {
        console.log(error);
      }
    }
    getBeer();
  }, []);

  function randomBeer(): string {
    return beer[Math.floor(Math.random() * beer.length)];
  }

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
        linkTo={beer ? `/beer/${randomBeer()}` : '/'}
        linkText='Random Beer'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. '
      />
    </div>
  );
};

export default Home;
