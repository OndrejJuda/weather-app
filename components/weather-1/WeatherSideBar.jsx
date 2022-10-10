import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { CityCard } from './';

const cities = [
  { name: 'Lagos, LAG', temperature: '32°' },
  { name: 'Washington, DC', temperature: '20°' },
  { name: 'New York, NY', temperature: '28°' },
  { name: 'Los Angeles', temperature: '10°' },
  { name: 'Abu Dhabi, UAE', temperature: '25°' },
]

const WeatherSideBar = () => {
  return (
    <aside className='flex flex-col items-center py-4 px-4 bg-gray-600 bg-opacity-60 gap-4 backdrop-blur-sm'>
      <div className='pb-10 pt-6'>
        <AiOutlineMenu className='w-20 h-20 text-white p-4 rounded-full hover:shadow-md transition' />
      </div>
      {
        cities.map(({ name, temperature }, index) => (
          <CityCard
            key={name}
            index={index}
            name={name}
            temperature={temperature}
          />
        ))
      }
    </aside>
  );
};

export default WeatherSideBar;