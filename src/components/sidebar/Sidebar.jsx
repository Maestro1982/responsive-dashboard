import './sidebar.css';
import Logo from '../../imgs/logo.png';
import { SidebarData } from '../../data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { useState } from 'react';

function Sidebar() {
  const [selectedMenuItem, setSelectMenuItem] = useState(0);
  return (
    <div className='sidebar'>
      <div className='logo'>
        <img src={Logo} alt='Logo' />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className='menu'>
        {SidebarData.map((item, index) => {
          return (
            <div
              className={
                selectedMenuItem === index ? 'menuItem active' : 'menuItem'
              }
              key={index}
              onClick={() => setSelectMenuItem(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className='menuItem'>
          <UilSignOutAlt />
          Sign Out
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
