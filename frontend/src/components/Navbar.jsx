import { NavLink } from 'react-router-dom';
import Button from './Button';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import styles from '../styles';
import { useState } from 'react';

const links = [
  { title: 'Home', id: Math.random(), to: '/' },
  { title: 'About', id: Math.random(), to: '/about' },
  { title: 'Queues', id: Math.random(), to: '/queues' },
  { title: 'Polling', id: Math.random(), to: '/polling' },
  { title: 'Announcements', id: Math.random(), to: '/announcements' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-8 w-full relative text-sm sm:text-base">
      <div className="flex justify-between items-center w-full">
        <ul className="list-none hidden lg:flex">
          {links.map((link, index) => (
            <li
              key={link.id}
              className={`${
                index !== links.length - 1 ? 'mr-12' : 'mr-0'
              } text-black font-poppins`}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'text-purple-500' : ''
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className={`${styles.flexCenter} lg:hidden cursor-pointer`}
          onClick={() => setOpen((prev) => !prev)}
        >
          {!open ? <HiBars3 size={'32px'} /> : <HiXMark size={'32px'} />}
        </div>
        <div className="flex gap-6 sm:gap-12">
          <Button>Sing In</Button>
          <Button alternative={true}>Sing Up</Button>
        </div>
      </div>

      {open && (
        <div className="absolute card-gradient z-10 p-4 rounded-xl top-24 animation shadow-lg lg:hidden">
          <div className="flex flex-col items-center justify-start">
            {links.map((link, index) => (
              <div
                key={link.id}
                className={`${index !== links.length - 1 ? 'mb-4' : 'mr-0'}`}
                onClick={() => setOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? 'text-purple-500' : ''
                  }
                >
                  {link.title}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
