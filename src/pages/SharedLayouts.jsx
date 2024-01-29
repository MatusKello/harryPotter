import { Outlet } from 'react-router';
import LanguageSwitcher from '../components/LanguageSwitcher';
import NavBar from '../components/NavBar';
import MyBreadcrumbs from '../components/MyBreadcrumbs';

const SharedLayouts = () => {
  return (
    <div>
      <LanguageSwitcher />
      <NavBar />
      <MyBreadcrumbs />
      <Outlet />
    </div>
  );
};

export default SharedLayouts;
