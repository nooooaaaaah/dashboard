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

const NavButton = ({title, customFunc, icon, color, dotColor }) => {
  <TooltipComponent content={title} position='BottomCenter'>
    <button></button>
  </TooltipComponent>
}

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
      <navButton title='Menu' customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color='rgb(202 138 4)' />
    </div>
  )
}

export default Navbar