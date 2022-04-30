import './sidebar.css';
import Logo from '../../imgs/logo.png';
import { SidebarData } from '../../data/Data';
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Sidebar() {
  const [selectedMenuItem, setSelectMenuItem] = useState(0);
  const [mobileSidebarExpanded, setMobileSidebarExpanded] = useState(true);
  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };
  return (
    <>
      <div
        className='bars'
        style={mobileSidebarExpanded ? { left: '60%' } : { left: '5%' }}
        onClick={() => setMobileSidebarExpanded(!mobileSidebarExpanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${mobileSidebarExpanded}` : ''}
      >
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
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
