import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to='/'>Main page</NavLink>
      <NavLink to='hogwarts-students'>Hogwarts students</NavLink>
      <NavLink to='hogwarts-teachers'>Hogwarts teachers</NavLink>
      <NavLink to='hogwarts-houses'>Hogwarts houses</NavLink>
      <NavLink to='all-spells'>All- spells</NavLink>
    </div>
  );
};

export default NavBar;
