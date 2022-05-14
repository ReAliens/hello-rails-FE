import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Main from '../main/Main';

const AppRoutes = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
