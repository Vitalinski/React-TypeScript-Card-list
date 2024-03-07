import Dashboard from '@/components/pages/Dashboard';
import Login from '@/components/pages/Login';
import { ROUTES } from '@/store/cards/cards.constants';
import { Route, Routes } from 'react-router-dom';

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
