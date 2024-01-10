import { Outlet } from 'react-router';
import LanguageSwitcher from '../components/LanguageSwitcher';
import NavBar from '../components/NavBar';

const SharedLayouts = () => {
  return (
    <div>
      <LanguageSwitcher />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default SharedLayouts;
