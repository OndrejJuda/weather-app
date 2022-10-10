import React from 'react';
import Image from 'next/image';

import { weatherIcons } from '../../assets/weather-1/icons';

const CityCard = ({ index, name, temperature }) => {
  return (
    <>
      {
        index !== 0 && (
          <div className='w-full h-[1px] bg-white' />
        )
      }
      <article className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-start'>
          <div className='h-24 w-24'>
            <Image src={weatherIcons.clear} alt='Weather icon' width='240' height='240' />
          </div>
          <p className='text-white'>{temperature}</p>
        </div>
        <p className='text-white'>{name}</p>
      </article>
    </>
  );
};

export default CityCard;