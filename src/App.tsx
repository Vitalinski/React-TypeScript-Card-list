import { Route, Routes } from 'react-router-dom';
import Dashboard from '@/components/pages/Dashboard';
import Login from '@/components/pages/Login';
import { ROUTES } from '@/store/routes';

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.START} element={<Login />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
    </Routes>
  );
};

export default App;
20;
