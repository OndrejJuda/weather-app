import React from 'react';
import { AiOutlineHome, AiOutlineFire } from 'react-icons/ai';
import { TiWeatherWindyCloudy, TiWeatherSnow } from 'react-icons/ti';
import { WiNightAltSprinkle } from 'react-icons/wi';
import { RiMapPin5Line } from 'react-icons/ri';

const className = 'px-4 h-12 w-[calc(100%-8px)] -ml-[8px] text-gray-600 flex justify-center items-center border-l-8 hover:border-gray-900';

const NavBar = () => {
  return (
    <nav className='flex flex-col gap-12 justify-center items-center py-24'>
      <AiOutlineHome className={`${className}`} />
      <TiWeatherWindyCloudy className={className} />
      <WiNightAltSprinkle className={className} />
      <AiOutlineFire className={className} />
      <TiWeatherSnow className={className} />
      <RiMapPin5Line className={className} />
    </nav>
  );
};

export default NavBar;