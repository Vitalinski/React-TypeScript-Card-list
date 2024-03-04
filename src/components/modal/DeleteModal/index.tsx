import Button from '@/components/Button';
import { FC , useEffect} from 'react';
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '@/store';
import {
  changeWaitingMode,
  changeNotification,
  clearNotification,
  closeModal,
} from '@/store/cards';
import Container from '@/components/modal/Container';
import styles from '@/components/modal/DeleteModal/delete.module.scss';
import { useDeleteCardMutation } from '@/store/cards/cards.apiCalls';
import Overlay from '@/components/modal/Overlay';
const DeleteModal: FC = () => {
  const [deleteCard] = useDeleteCardMutation();
  const dispatch = useStoreDispatch();
  const isDeleteOpen = useSelector((state: RootState) => state.cardAction.isDeleteOpen);
  const isWaiting = useSelector((state: RootState) => state.cardAction.waitingMode);

  const title = useSelector((state: RootState) => state.cardAction.currentCard.title);
  const id = useSelector((state: RootState) => state.cardAction.currentCard.id);

  useEffect(() => {
    if (isDeleteOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isDeleteOpen]);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isDeleteOpen) {
      cleaneAndClose();
    }
  });
  const cleaneAndClose = () => {
    if (isWaiting) return;
    dispatch(closeModal());
  };
  const toDelete = async () => {
    if (typeof id === 'number') {
      dispatch(changeWaitingMode(true));
      try {
        await deleteCard(id).unwrap();
        dispatch(changeWaitingMode(false));
        dispatch(changeNotification('Card has been deleted'));
      } catch (error) {
        dispatch(changeWaitingMode(false));
        dispatch(changeNotification('Something went wrong'));
      }

      cleaneAndClose();
      setTimeout(() => {
        dispatch(clearNotification());
      }, 1000);
    }
  };
  if (isDeleteOpen) {
    return (
      <Overlay onClick={cleaneAndClose}>
        <Container closeBtn={true} title=' DELETE CARD' onClick={cleaneAndClose}>
          <p className={styles.info}>Are you sure you want to delete card “{title}”?</p>
          <div className={styles.btns}>
            <Button
              onClick={cleaneAndClose}
              class='button-white'
              text='Close'
              style='button-modal'
            />
            <Button onClick={toDelete} class='button-yellow' text='Delete' style='button-modal' />
          </div>
        </Container>
        </Overlay>
    );
  }
  return null;
};

export default DeleteModal;
