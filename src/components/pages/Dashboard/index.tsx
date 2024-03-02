import { FC, useEffect } from 'react';
import Board from '@/components/board/Board';
import Header from '@/components/Header';
import DeleteModal from '@/components/modal/DeleteModal';
import Modal from '@/components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import Container from '@/components/modal/Container';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import styles from '@/components/pages/Dashboard/dashboard.module.scss';
const Dashboard: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('userEmail')) {
      navigate('/');
    }
  }, []);

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
