import React from 'react';
import Image from 'next/image';
import { MenuSideBar, WeatherSection, WeatherSideBar } from './';
import bgImage from '../../assets/weather-1/bgimage.jpg';

const WeatherApp = () => {
  return (
    <div className='flex flex-row relative'>
      <div className='absolute -z-10 inset-0'>
        <Image src={bgImage} alt='Background image' layout='fill' objectFit='cover' />
      </div>
      <MenuSideBar />
      <WeatherSection />
      <WeatherSideBar />
    </div>
  );
};

export default WeatherApp;