import React from 'react';
import './AllBeers.scss';
import { Link } from 'react-router-dom';

interface Data {
  key: string;
  imgSrc: string;
  heading1: string;
  heading2: string;
  heading3: string;
  linkTo: string;
}

const AllBeers: React.FC<Data> = ({
  imgSrc,
  heading1,
  heading2,
  heading3,
  linkTo,
}) => {
  return (
    <div className='allBeers'>
      <div>
        <img src={imgSrc} alt='beer' />
      </div>
      <div>
        <h1>{heading1}</h1>
        <h2>{heading2}</h2>
        <h3>{heading3}</h3>
        <Link to={linkTo}>Details</Link>
      </div>
    </div>
  );
};

export default AllBeers;
