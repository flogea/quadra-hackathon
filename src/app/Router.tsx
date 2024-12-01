import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StructurePage, UserInfoPage } from '../pages';
import { StoreProvider } from './StoreContext';

const AppRouter: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/user/1" replace />} />

          <Route path="/user/:id" element={<UserInfoPage />} />

          <Route path="/structure" element={<StructurePage />} />

          {/* 404: Страница не найдена */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default AppRouter;
