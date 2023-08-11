import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import { HiBars3, HiXMark, HiChevronDown } from 'react-icons/hi2';
import styles from '../styles';
import defaultProfilePicture from '../assets/profile-picture.webp';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/authSlice';

const navLinks = [
  { title: 'Home', id: Math.random(), to: '/' },
  { title: 'About', id: Math.random(), to: '/about' },
  { title: 'Queues', id: Math.random(), to: '/queues' },
  { title: 'Polling', id: Math.random(), to: '/polling' },
  { title: 'Announcements', id: Math.random(), to: '/announcements' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileTabOpen, setProfileTabOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="py-8 w-full relative text-sm sm:text-base">
      <div className="flex justify-between items-center w-full">
        <ul className="list-none hidden lg:flex">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`${
                index !== navLinks.length - 1 ? 'mr-12' : 'mr-0'
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
        {!userInfo ? (
          <div className="flex gap-6 sm:gap-12">
            <Link to="sing-in">
              <Button>Sing In</Button>
            </Link>
            <Link to="sing-up">
              <Button alternative={true}>Sing Up</Button>
            </Link>
          </div>
        ) : (
          <div className="relative">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => setProfileTabOpen((prev) => !prev)}
            >
              <div
                className={`${styles.flexCenter} w-10 rounded-full overflow-hidden transition-all ease-out duration-300 group-hover:ring-[3.5px] ring-purple-500 mr-3`}
              >
                <img
                  src={defaultProfilePicture}
                  alt="profile picture"
                  className="w-full h-auto"
                />
              </div>
              <p className="font-poppins capitalize text-lg mr-2">
                {userInfo.name}
              </p>
              <div className="pb-[3px] transition-all group-hover:translate-y-[3px] duration-200">
                <HiChevronDown size={'20px'} />
              </div>
            </div>
            {profileTabOpen && (
              <ul className="absolute duration-300 top-[68px] right-[22px] min-w-max animation flex flex-col list-none items-center z-10 p-2 profile-card-gradient rounded-xl">
                <li
                  className="font-poppins px-[14px] py-[10px] cursor-pointer"
                  onClick={() => {
                    setProfileTabOpen(false);
                  }}
                >
                  <Link to="profile">Profile</Link>
                </li>
                <li className="w-full h-[1px] bg-slate-500"></li>
                <li
                  className="font-poppins px-[14px] py-[10px] cursor-pointer"
                  onClick={() => {
                    setProfileTabOpen(false);
                    dispatch(logout());
                  }}
                >
                  Sign Out
                </li>
              </ul>
            )}
          </div>
        )}
      </div>

      {open && (
        <div className="absolute card-gradient z-10 p-4 rounded-xl top-24 animation shadow-lg lg:hidden">
          <div className="flex flex-col items-center justify-start">
            {navLinks.map((link, index) => (
              <div
                key={link.id}
                className={`${index !== navLinks.length - 1 ? 'mb-4' : 'mr-0'}`}
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
