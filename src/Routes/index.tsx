import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import DefaultLayout from '@Layouts/DefaultLayout';
import Detail from '@Pages/Detail';
import Home from '@Pages/Home';
import Login from '@Pages/Login';

function PrivateRoute() {
  const userToken = localStorage.getItem('utk');

  if (!userToken) return <Navigate to='/login' replace />;

  return <Outlet />;
}

function RouteContainer() {
  return (
    <DefaultLayout>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </DefaultLayout>
  );
}

export default RouteContainer;
