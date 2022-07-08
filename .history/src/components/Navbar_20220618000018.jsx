import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
      type='button'
      onClick={() => customFunc()}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span
        style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick } = useStateContext();
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <NavButton
        title='Menu'
        color='rgb(202 138 4)'
        customFunc={handleActiveMenu}
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          title='Chat'
          color='rgb(202 138 4)'
          dotColor={'rgb(55 48 163)'}
          customFunc={() => handleClick('chat')}
          icon={<BsChatLeft />}
        />
        <NavButton
          title='Notifications'
          color='rgb(202 138 4)'
          dotColor={'rgb(55 48 163)'}
          customFunc={() => handleClick('notification')}
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}>
            <img
              className='rounded-full w-7 h-7'
              src={avatar}
              alt='user-profile'
            />
            <p>
              <span className='text-indigo-800 text-14'>Hi,</span>{' '}
              <span className='text-indigo-800 font-bold ml-1 text-14'>
                Noah
              </span>
            </p>
            <MdKeyboardArrowDown className='text-yellow-600 text-14' />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
