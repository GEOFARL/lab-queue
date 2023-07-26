import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="py-8 w-full flex justify-between items-center">
      <ul className="list-none">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
