import { NavLink } from 'react-router-dom';
import Button from './Button';

const links = [
  { title: 'Home', id: Math.random(), to: '/' },
  { title: 'About', id: Math.random(), to: '/about' },
  { title: 'Queues', id: Math.random(), to: '/queues' },
  { title: 'Polling', id: Math.random(), to: '/polling' },
  { title: 'Announcements', id: Math.random(), to: '/announcements' },
];

const Navbar = () => {
  return (
    <nav className="py-8 w-full flex justify-between items-center">
      <ul className="list-none flex">
        {links.map((link, index) => (
          <li
            key={link.id}
            className={`${
              index !== links.length - 1 ? 'mr-12' : 'mr-0'
            } text-black font-poppins`}
          >
            <NavLink to={link.to}>{link.title}</NavLink>
          </li>
        ))}
      </ul>

      <div className="flex">
        <Button>Sing In</Button>
        <Button>Sing Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
