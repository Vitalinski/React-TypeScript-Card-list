import Button from '@/components/Button';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '@/store';
import {
  changeWaitingMode,
  changeNotification,
  clearNotification,
  closeDelete,
} from '@/store/cards';
import Container from '@/components/Container';
import styles from '@/components/DeleteModal/DeleteModal.module.scss';
import { useDeleteCardMutation } from '@/store/cards/cards.apiCalls';
import Overlay from '@/components/Overlay';
import { NOTIFICATION } from '@/store/cards/cards.constants';
const DeleteModal: FC = () => {
  const [deleteCard, {isLoading, isSuccess}] = useDeleteCardMutation();
  const dispatch = useStoreDispatch();
  const isDeleteOpen = useSelector((state: RootState) => state.cardAction.isDeleteOpen);
  const title = useSelector((state: RootState) => state.cardAction.currentCard.title);
  const id = useSelector((state: RootState) => state.cardAction.currentCard.id);

  useEffect(()=>{
    dispatch(changeWaitingMode(isLoading));
  },[isLoading, dispatch])
  const cleaneAndClose = () => {
    if (isLoading) return;
    dispatch(closeDelete());
  };
isSuccess&&console.log('success')
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
            <Button
              onClick={cleaneAndClose}
              type='button-white'
              style='button-modal'
            > 
            Close
            </Button>
            <Button onClick={toDelete} type='button-yellow'  style='button-modal' >Delete</Button>
          </div>
        </Container>
        </Overlay>
    );
  }
  return null;
};

export default DeleteModal;
