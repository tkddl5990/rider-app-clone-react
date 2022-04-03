import React from 'react';
import { Route, Routes } from 'react-router-dom';

import DefaultLayout from '@Layouts/DefaultLayout';
import Detail from '@Pages/Detail';
import Home from '@Pages/Home';

function RouteContainer() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </DefaultLayout>
  );
}

export default RouteContainer;
