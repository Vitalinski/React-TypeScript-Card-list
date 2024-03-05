import { FC, useEffect } from 'react';
import Board from '@/components/Board';
import Header from '@/components/Header';
import DeleteModal from '@/components/DeleteModal';
import Modal from '@/components/CreateOrUpdateModal';
import { useNavigate } from 'react-router-dom';
import Container from '@/components/Container';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import styles from '@/components/pages/Dashboard/Dashboard.module.scss';
import { ROUTES } from '@/store/cards/cards.constants';
const Dashboard: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('userEmail')) {
      navigate(ROUTES.START);
    }
  }, [navigate]);

  const notification = useSelector((state: RootState) => state.cardAction.notification);
  const status = notification.includes('Something') ? 'error' : 'success';
  return (
    <>
      <Header />
      <Board />
      <Modal />
      <DeleteModal />
      {notification && (
        <Container title='Notification' closeBtn={false}>
          <p className={styles[status]}>{notification}</p>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
