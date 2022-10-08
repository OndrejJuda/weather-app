import React from 'react';
import { NavBar, SettingsBar } from './';

const MenuSideBar = () => {
  return (
    <div className='bg-gray-200 flex flex-col'>
      <NavBar />
      <SettingsBar />
    </div>
  );
};

export default MenuSideBar;