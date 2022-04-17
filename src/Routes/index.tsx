import { Route, Routes } from 'react-router-dom';

import DefaultLayout from '@Layouts/DefaultLayout';
import Detail from '@Pages/Detail';
import Home from '@Pages/Home';
import Login from '@Pages/Login';

function RouteContainer() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </DefaultLayout>
  );
}

export default RouteContainer;
