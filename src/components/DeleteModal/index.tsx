import Button from '@/components/Button';
import Container from '@/components/Container';
import styles from '@/components/DeleteModal/DeleteModal.module.scss';
import Overlay from '@/components/Overlay';
import { useStoreDispatch } from '@/store';
import {
  changeNotification,
  changeWaitingMode,
  clearNotification,
  closeDelete,
} from '@/store/cards';
import { NOTIFICATION } from '@/store/cards/cards.constants';
import { useDeleteCardMutation } from '@/store/cards/cards.endpoints';
import {
  selectCurrentCardId,
  selectCurrentCardTitle,
  selectIsDeleteOpen,
} from '@/store/cards/cards.selectors';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

const DeleteModal: FC = () => {
  const [deleteCard, { isLoading }] = useDeleteCardMutation();
  const dispatch = useStoreDispatch();
  const isDeleteOpen = useSelector(selectIsDeleteOpen);
  const title = useSelector(selectCurrentCardTitle);
  const id = useSelector(selectCurrentCardId);

  useEffect(() => {
    dispatch(changeWaitingMode(isLoading));
  }, [isLoading, dispatch]);
  const cleaneAndClose = () => {
    if (isLoading) return;
    dispatch(closeDelete());
  };
  const toDelete = async () => {
    try {
      await deleteCard(id!).unwrap();
      dispatch(changeNotification(NOTIFICATION.SUCCESS.DELETE));
    } catch (error) {
      dispatch(changeNotification(NOTIFICATION.ERROR));
    }

    cleaneAndClose();
    setTimeout(() => {
      dispatch(clearNotification());
    }, 1000);
  };
  if (isDeleteOpen) {
    return (
      <Overlay onClick={cleaneAndClose}>
        <Container closeBtn={true} title=' DELETE CARD' onClick={cleaneAndClose}>
          <p className={styles.info}>Are you sure you want to delete card “{title}”?</p>
          <div className={styles.btns}>
            <Button onClick={cleaneAndClose} type='button-white' style='button-modal'>
              Close
            </Button>
            <Button onClick={toDelete} type='button-yellow' style='button-modal'>
              Delete
            </Button>
          </div>
        </Container>
      </Overlay>
    );
  }
  return null;
};

export default DeleteModal;
