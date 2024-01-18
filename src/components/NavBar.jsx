import { NavLink } from 'react-router-dom';
import './NavLink.css';

const NavBar = () => {
  return (
    <div>
      <NavLink className='linkStyle' to='/'>
        Main page
      </NavLink>
      <NavLink className='linkStyle' to='hogwarts-students'>
        Hogwarts students
      </NavLink>
      <NavLink className='linkStyle' to='hogwarts-teachers'>
        Hogwarts teachers
      </NavLink>
      <NavLink className='linkStyle' to='hogwarts-houses'>
        Hogwarts houses
      </NavLink>
      <NavLink className='linkStyle' to='all-spells'>
        All- spells
      </NavLink>
    </div>
  );
};

export default NavBar;
