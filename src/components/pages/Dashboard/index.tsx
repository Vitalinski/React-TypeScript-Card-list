import Board from '@/components/Board';
import Container from '@/components/Container';
import Modal from '@/components/CreateOrUpdateModal';
import DeleteModal from '@/components/DeleteModal';
import Header from '@/components/Header';
import styles from '@/components/pages/Dashboard/Dashboard.module.scss';
import { ROUTES } from '@/store/cards/cards.constants';
import { selectNotification, selectUserEmail } from '@/store/cards/cards.selectors';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard: FC = () => {
  const navigate = useNavigate();
  const userEmail = useSelector(selectUserEmail);
  useEffect(() => {
    if (!userEmail) {
      navigate(ROUTES.START);
    }
  }, [navigate, userEmail]);

  const notification = useSelector(selectNotification);
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
