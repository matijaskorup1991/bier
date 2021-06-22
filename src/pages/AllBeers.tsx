import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Beer from '../components/AllBeers';
import './AllBeers.scss';

interface Data {
  _id: string;
  image_url: string;
  name: string;
  tagline: string;
  ingredients: string;
  linkText: string;
  linkTo: string;
  contributed_by: string;
}

const AllBeers: React.FC = () => {
  const [beer, setBeer] = useState<any>(null);

  useEffect(() => {
    async function getBeer() {
      try {
        let { data } = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        setBeer(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBeer();
  }, []);

  return (
    <div className='all-beers'>
      {beer &&
        beer.map((el: Data) => {
          return (
            <Beer
              key={el._id}
              imgSrc={el.image_url}
              heading1={el.name}
              heading2={el.tagline}
              heading3={el.contributed_by.substring(
                0,
                el.contributed_by.indexOf('<')
              )}
              linkTo={`/beer/${el._id}`}
            />
          );
        })}
    </div>
  );
};

export default AllBeers;
