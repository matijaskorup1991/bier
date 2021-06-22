import React, { useState, useEffect } from 'react';
import back from '../assets/img/Vector.svg';
import axios from 'axios';
import './Beer.scss';

interface Props {
  params: any;
  goBack: any;
}

interface Data {
  _id: string;
  image_url: string;
  name: string;
  tagline: string;
  first_brewed: string;
  contributed_by: string;
  attenuation_level: number;
  description: string;
  faArrowLeft: any;
}
const Beer = ({ match, history }: { match: Props; history: Props }) => {
  let [beer, setBeer] = useState<any>(null);
  useEffect(() => {
    async function getBeer() {
      try {
        let { data } = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${match.params.id}`
        );
        setBeer([data]);
      } catch (error) {
        console.log(error);
      }
    }
    getBeer();
  }, [match.params.id]);

  let beerData =
    beer &&
    beer.map((el: Data) => {
      return (
        <React.Fragment key={el._id}>
          <img src={el.image_url} alt='beer' />
          <h1>{el.name}</h1>
          <h2>{el.tagline}</h2>
          <p>
            First brewed: <span>{el.first_brewed}</span>
          </p>
          <p>
            Attenuation level: <span>{el.attenuation_level}</span>
          </p>
          <h3>{el.description}</h3>
          <button onClick={() => history.goBack()}>
            <img src={back} alt='Back' />
          </button>
        </React.Fragment>
      );
    });

  return <div className='beer'>{beerData}</div>;
};

export default Beer;
