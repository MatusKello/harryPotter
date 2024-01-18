import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayouts from '../pages/SharedLayouts';
import MainPage from '../pages/MainPage';
import HogStudents from '../pages/HogStudents';
import HogTeachers from './../pages/HogTeachers';
import AllSpells from './../pages/AllSpells';
import HogHouses from './../pages/HogHouses';
import HogStudentInfo from '../pages/HogStudentInfo';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayouts />}>
          <Route index element={<MainPage />} />
          <Route path='hogwarts-students' element={<HogStudents />} />
          <Route path='hogwarts-students/:id' element={<HogStudentInfo />} />
          <Route path='hogwarts-teachers' element={<HogTeachers />} />
          <Route path='hogwarts-houses' element={<HogHouses />} />
          <Route path='all-spells' element={<AllSpells />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
