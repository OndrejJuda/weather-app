import React from 'react';
import Image from 'next/image';
import profilePicture from '../../assets/JUD_square_640.png';
import { RiSettings4Fill } from 'react-icons/ri';

const SettingsBar = () => {
  return (
    <div className='flex flex-col gap-12 justify-center items-center py-8'>
      <div className='w-full border-l-8 hover:border-gray-900 flex justify-center items-center'>
        <div className='w-10 h-10'>
          <div className='w-[calc(100%-8px)]'>
            <Image
              className='w-full h-full rounded-full'
              src={profilePicture}
              alt='Profile picture'
            />
          </div>
        </div>
      </div>
      <RiSettings4Fill className='px-4 h-12 w-[calc(100%-8px)] -ml-[8px] text-gray-600 flex justify-center items-center border-l-8 hover:border-gray-900' />
    </div>
  );
};

export default SettingsBar;