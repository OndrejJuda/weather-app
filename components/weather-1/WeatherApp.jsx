import React from 'react';
import { MenuSideBar, WeatherSection, WeatherSideBar } from './';

const WeatherApp = () => {
  return (
    <div className='flex flex-row'>
      <MenuSideBar />
      <WeatherSection />
      <WeatherSideBar />
    </div>
  );
};

export default WeatherApp;