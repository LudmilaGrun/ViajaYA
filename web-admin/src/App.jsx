import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminLayout } from './layout/AdminLayout';
import { DashboardPage } from './pages/DashboardPage';
import { UsersPage } from './pages/UsersPage';
import { TripsPage } from './pages/TripsPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { SupportPage } from './pages/SupportPage';

export const App = () => (
  <Routes>
    <Route path="/" element={<AdminLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="trips" element={<TripsPage />} />
      <Route path="companies" element={<CompaniesPage />} />
      <Route path="support" element={<SupportPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
