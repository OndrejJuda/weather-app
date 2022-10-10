import React from 'react';
import { NavBar, SettingsBar } from './';

const MenuSideBar = () => {
  return (
    <div className='bg-gray-200 flex flex-col items-center'>
      <NavBar />
      <div className='w-[80%] h-[1px] bg-gray-600' />
      <SettingsBar />
    </div>
  );
};

export default MenuSideBar;